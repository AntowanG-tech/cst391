import { Request, RequestHandler, Response } from 'express';
import { Book } from './books.model';
import { Genre } from '../genres/genres.model';
import * as BooksDao from './books.dao';
import * as GenreDao from '../genres/genres.dao';
import { OkPacket} from 'mysql';

export const readBooks: RequestHandler = async (req: Request, res: Response) => {
    try {
        let books;
        let bookID = parseInt(req.query.bookID as string);

        console.log('bookID', bookID);
        if (Number.isNaN(bookID)) {
            books = await BooksDao.readBooks();
        } else {
            books = await BooksDao.readBooksByBookID(bookID);
        }
        res.status(200).json(
            books
        );
    } catch (error) {
        console.error('[books.controller][readBooks][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching books'
        });
    }
};

export const readBooksByAuthor: RequestHandler = async (req: Request, res: Response) => {
    const authorID = parseInt(req.params.authorID, 10); // ensure authorID is an integer

    if (isNaN(authorID)) {
        return res.status(404).json({ error: 'invalid author ID'});
    }
    
    try {
        const books = await BooksDao.readBooksByAuthor(authorID);

        res.status(200).json(books);
    } catch (error) {
        console.error('[books.controller][readBooks][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fectching books'
        });
    }
};

export const readBooksByAuthorSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const books = await BooksDao.readBooksByAuthorSearch('%' + req.params.search + '%');

        res.status(200).json(books);
    } catch (error) {
        console.error('[books.controller][readBooks][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching books'
        });
    }
};

export const readBooksByGenreSearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log('search', req.params.search);
        const books = await BooksDao.readBooksByGenreSearch('%' + req.params.search + '%');

        res.status(200).json(books);
    } catch (error) {
        console.error('[books.controller][readBooks][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching books'
        });
    }
};

export const createBook: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await BooksDao.createBook(req.body);

        console.log('req.body', req.body);
        console.log('book', okPacket);

        req.body.genre.forEach(async (genre: Genre, index: number) => {
            try {
                await GenreDao.createGenre(genre, index, okPacket.insertId);
            } catch (error) {
                console.error('[books.controller][createBookGenres][Error] ', error);
                res.status(500).json({
                    message: 'There was an error when writing book genre'
                });
            }
        });

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[books.controller][createBook][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing books'
        });
    }
};

export const updateBook: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await BooksDao.updateBook(req.body);

        console.log('req.body', req.body);
        console.log('book', okPacket);

        res.status(200).json(okPacket);
    } catch (error) {
        console.error('[books.controller][updateBook][Error] ', error);
        res.status(500).json({
            message: 'There was an error when writing books'
        });
    }
};

export const deleteBook: RequestHandler = async (req: Request, res: Response) => {
    try {
        let bookID = parseInt(req.params.bookID as string);
        console.log('bookID', bookID)

        if (!Number.isNaN(bookID)) {
            const response = await BooksDao.deleteBook(bookID);
            res.status(200).json(response);

        } else {
            throw new Error("Integer expected for bookID");
        }

    } catch (error) {
        console.error('[books.controller][deleteBook][Error] ', error);
        res.status(500).json({
            message: 'There was an error when deleting books'
        });
    }
};
