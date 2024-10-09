import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Genre } from "./genres.model";
import { genreQueries } from './genres.queries';


export const readGenres = async (bookID: number) => {
    return execute<Genre[]>(genreQueries.readGenres, []);
};

export const createGenre = async (Genre: Genre, index: number, insertId: number) => {
    return execute<OkPacket>(genreQueries.createGenre,
        [Genre.genreDesc]);
};

export const updateGenre = async (Genre: Genre) => {
    return execute<OkPacket>(genreQueries.updateGenre,
        [Genre.genreDesc, Genre.genreID]);
};

