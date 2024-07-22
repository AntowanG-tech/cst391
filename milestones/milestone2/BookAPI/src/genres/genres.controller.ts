import { Request, RequestHandler, Response } from 'express';
import { Genre } from './genres.model';
import { Book } from './../books/books.model';
import * as GenreDao from '../genres/genres.dao';
import * as BooksDao from '../books/books.dao';
import { OkPacket } from 'mysql';

export const readGenres: RequestHandler = async (req: Request, res: Response) => {
    try {
        let genres;
        let genreId = parseInt(req.query.genreId as string);

        console.log('genreId', genreId);
        if (Number.isNaN(genreId)) {
            genres = await GenreDao.readGenres();
        } else {
            genres = await GenreDao.readAlbumsBygenreId(genreId);
        }
        await readBooks(genres, res);
        res.status(200).json(
            genres
        );
    } catch (error) {
        console.error('[genres.controller][readGenres][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching genres'
        });
    }
};

export const readGenresByAuthor: RequestHandler = async (req: Request, res: Response) => {
    try {
        const genres = await GenreDao.readGenresByAuthor(req.params.artist);
        await readBooks(genres, res);

        res.status(200).json(genres);
    } catch (error) {
        console.error('[genres.controller][readGenres][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching genres'
        });
    }
};

export const readGenresByAuthorSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const genres = await GenreDao.readGenresByAuthorSearch('%' + req.params.search + '%');

        await readBooks(genres, res);

        res.status(200).json(genres);
    } catch (error) {
        console.error('[genres.controller][readGenres][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching genres'
        });
    }
};

export const readGenresByDescriptionSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const genres = await GenreDao.readGenresByDescriptionSearch('%' + req.params.search + '%');

        await readBooks(genres, res);

        res.status(200).json(genres);
    } catch (error) {
        console.error('[genres.controller][readGenres][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching genres'
        });
    }
};

export const createGenre: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await GenreDao.createGenre(req.body);

        console.log('req.body', req.body);
        console.log('genre', okPacket);

        req.body.books.forEach(async (book: Book, index: number) => {
            try {
                await BooksDao.createBook(book, index, okPacket.insertId);
            } catch (error) {
                console.error('[genres.controller][createGenreBooks][Error] ', error);
                res.status(500).json({
                    message: 'There was an error when writing genre books'
                });
            }
        });

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[genres.controller][createGenre][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing genres'
        });
    }
};

export const updateGenre: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await GenreDao.updateGenre(req.body);

        console.log('req.body', req.body);
        console.log('genre', okPacket);

        req.body.books.forEach(async (book: Book, index: number) => {
            try {
                await BooksDao.updateBook(book);
            } catch (error) {
                console.error('[genres.controller][updateGenre][Error] ', error);
                res.status(500).json({
                    message: 'There was an error when updating genre books'
                });
            }
        });

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[genres.controller][updateGenre][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing genres'
        });
    }
};

export const deleteGenre: RequestHandler = async (req: Request, res: Response) => {
    try {
        let genreId = parseInt(req.params.genreId as string);
        console.log('genreId', genreId);

        if (!Number.isNaN(genreId)) {
            const response = await GenreDao.deleteGenre(genreId);
            res.status(200).json(response);

        } else {
            throw new Error("Integer expected for genreId");
        }

    } catch (error) {
        console.error('[genres.controller][deleteGenre][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting genres'
        });
    }
};

async function readBooks(genres: Genre[], res: Response<any, Record<string, any>>) {

    for (let i = 0; i < genres.length; i++) {

        try {
            const books = await BooksDao.readBooks(genres[i].genreId);
            genres[i].books = books;

        } catch (error) {
            console.error('[genres.controller][readBooks][Error] ', error);
            res.status(500).json({
                message: 'There was an error when fetching genres books'
            });
        }
    }

};


