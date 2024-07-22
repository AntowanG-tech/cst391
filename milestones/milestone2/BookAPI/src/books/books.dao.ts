import { execute } from "../services/mysql.connector";
import { Book } from "./books.model";
import { bookQueries } from './books.queries';

export const readBooks = async (genreId: number) => {
    return execute<Book[]>(bookQueries.readBooks, [genreId]);
};

export const createBook = async (book: Book, index: number, genreId: number) => {
    return execute<Book[]>(bookQueries.createBook,
        [genreId, book.title, book.number, book.video, book.lyrics]);
};


export const updateBook = async (book: Book) => {
    return execute<Book[]>(bookQueries.updateBook,
        [book.title, book.number, book.video, book.lyrics, book.bookId]);
};
