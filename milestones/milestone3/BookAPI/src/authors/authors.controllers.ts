import { Request, RequestHandler, Response } from "express";
import * as AuthorDao from './aruthors.dao';



export const readAuthors: RequestHandler = async (req: Request, res: Response) => {
    try {
        const authors = await AuthorDao.readAuthors();

        res.status(200).json(authors);
    } catch (error) {
        console.error('[authors.controller][ReadAuthors][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching authors'
        });
    }

};

export const readAuthorsBySearch: RequestHandler = async (req: Request, res: Response) => {
    try {
        const searchTerm = req.query.name as string || '';  // Get search term from query string
        
        const authors = await AuthorDao.readAuthorsBySearch(searchTerm);

        if (authors.length === 0) {
            res.status(404).json({ message: 'No authors found' });
        } else {
            res.status(200).json(authors);
        }
    } catch (error) {
        console.error('[authors.controller][readAuthorsBySearch][Error]', error);
        res.status(500).json({
            message: 'There was an error when fetching authors'
        });
    }
};