import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Book } from "./books.model";
import { bookQueries } from './books.queries';

export const readBooks = async () => {
    return execute<Book[]>(bookQueries.readBooks, []);
};

// Function to read books by a specific author
export const readBooksByAuthor = async (author: string): Promise<Book[]> => {
    return execute<Book[]>(bookQueries.readBooksbyAuthor, ['%${author}%']);  // Pass the author name as a parameter
};

export const readBooksByBookID = async (bookID: number) => {
    return execute<Book[]>(bookQueries.readBooksByBookID, [bookID]);
};

export const createBook = async (book: Book) => {
    return execute<OkPacket>(bookQueries.createBook,
        [book.title, book.authorID, book.publishedDate, book.isbn, book.price, book.genreDesc]);
};

export const updateBook = async (book: Book) => {
    return execute<OkPacket>(bookQueries.updateBook,
        [book.title, book.authorID, book.publishedDate, book.isbn, book.price, book.genreDesc, book.bookID]);
};

export const deleteBook = async (bookID: number) => {
    return execute<OkPacket>(bookQueries.deleteBook, [bookID]);
};
