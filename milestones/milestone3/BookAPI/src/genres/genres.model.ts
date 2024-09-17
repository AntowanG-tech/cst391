import { Book } from "../books/books.model";


export interface Genre {
    genreId: number,
    title: string,
    artist: string,
    description: string,
    year: string,
    image: string,
    books: Book[]
}
