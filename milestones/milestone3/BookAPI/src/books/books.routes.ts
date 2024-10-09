import { Request, Response, Router } from "express";
import * as BooksController from './books.controllers';

const router = Router();
router
    .route('/books')
    .get(BooksController.readBooks);

export default router;