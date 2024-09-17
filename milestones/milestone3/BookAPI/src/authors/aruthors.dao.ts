import { execute } from "../services/mysql.connector";
import { Author } from "./authors.model";
import { authorQueries } from './authors.queries';

export const readAuthors = async () => {
    return execute<Author[]>(authorQueries.readAuthors, []);
};
