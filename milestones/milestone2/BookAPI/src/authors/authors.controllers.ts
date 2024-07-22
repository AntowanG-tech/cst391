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
