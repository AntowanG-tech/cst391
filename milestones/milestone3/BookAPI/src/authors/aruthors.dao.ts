import { execute } from "../services/mysql.connector";
import { Author } from "./authors.model";
import { authorQueries } from './authors.queries';

export const readAuthors = async () => {
    return execute<Author[]>(authorQueries.readAuthors, []);
};

export const readAuthorsBySearch = async (searchTerm: string) => {
    const searchQuery = `%${searchTerm}%`;  // Add wildcards for partial matching
    return execute<Author[]>(authorQueries.readAuthorsBySearch, [searchQuery]);
};