export const authorQueries = {
    readAuthors:
        `select * from library.author`,
    readAuthorsBySearch: 
        `SELECT * FROM library.author WHERE author LIKE ?`,
}
