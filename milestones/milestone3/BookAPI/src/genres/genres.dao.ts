import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Genre } from "./genres.model";
import { genreQueries } from './genres.queries';


export const readGenres = async () => {
    return execute<Genre[]>(genreQueries.readGenres, []);
};

export const readGenresByAuthor = async (authorName: string) => {
    return execute<Genre[]>(genreQueries.readGenresByAuthor, [authorName]);
};

export const readGenresByAuthorSearch = async (search: string) => {
    console.log('search param', search);
    return execute<Genre[]>(genreQueries.readGenresByAuthorSearch, [search]);
};

export const readGenresByDescriptionSearch = async (search: string) => {
    console.log('search param', search);
    return execute<Genre[]>(genreQueries.readGenresByDescriptionSearch, [search]);
};

export const readGenresByGenreId = async (GenreId: number) => {
    return execute<Genre[]>(genreQueries.readGenresByGenreId, [GenreId]);
};

export const createGenre = async (Genre: Genre) => {
    return execute<OkPacket>(genreQueries.createGenre,
        [Genre.title, Genre.artist, Genre.description, Genre.year, Genre.image]);
};

export const updateGenre = async (Genre: Genre) => {
    return execute<OkPacket>(genreQueries.updateGenre,
        [Genre.title, Genre.artist, Genre.year, Genre.image, Genre.description, Genre.genreId]);
};

export const deleteGenre = async (GenreId: number) => {
    return execute<OkPacket>(genreQueries.deleteGenre, [GenreId]);
};

