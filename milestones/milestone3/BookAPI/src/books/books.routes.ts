import { Request, Response, Router } from "express";
import * as BooksController from './books.controllers';

const router = Router();
router
    .route('/books')
    .get(BooksController.readBooks);

router
    .route('/books/:author')
    .get(BooksController.readBooksByAuthor);
    
router
    .route('/books')
    .post(BooksController.createBook);


router
    .route('/books')
    .put(BooksController.updateBook);



router
    .route('/books/:bookID')
    .delete(BooksController.deleteBook);

export default router;