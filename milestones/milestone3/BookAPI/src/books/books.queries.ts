export const bookQueries = {
    readBooks:
		`select bookID as bookID, title as title, authorID as authorID, publishedDate as published, ISBN as isbn, price as price, genreDesc as genre from library.books`,
	readBooksbyAuthor:
		`select bookID as bookID, title as title, author as author, publishedDate as publishedDate, ISBN as isbn, price as price, genreDesc as genre from library.books
		where library.books.author = ?`,
	readBooksbyAuthorSearch:
		`select bookID as bookID, title as title, author as author, publishedDate as publishedDate, ISBN as isbn, price as price, genreDesc as genre from library.books
		where library.books.author like ?`, 
	readBooksByBookID:
		`select bookID as bookID, title as title, author as author, publishedDate as published, ISBN as isbn, price as price, genreDesc as genre from library.books
	   where library.books.bookID = ?`,
	createBook:
		`insert into library.books(title, author, publishedDate, ISBN, price, genreDesc) values(?,?,?,?,?,?)`,
	updateBook:
		`update library.books set title=?, author=?, publishedDate=?, ISBN=?, price=?, genreDesc=? where bookID = ?`,
	deleteBook:
		`delete from library.books where bookID = ?`,
}
