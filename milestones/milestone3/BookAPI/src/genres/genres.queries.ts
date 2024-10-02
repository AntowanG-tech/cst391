export const genreQueries = {
	readGenres:
		`select genreID as ID, genreDesc as Genre`,
	readGenresByAuthor:
		`select author.authorID as ID, author.firstName as firstName, author.lastName as lastName, genre.genreDesc as Genre from library.books
		join author on books.authorID=author.authorID
		join genre on genre.genreDesc=books.genreDesc
	   where library.author.authorID = ?`,
	readGenresByAuthorSearch:
		`select author.authorID as ID, author.firstName as firstName, author.lastName as lastName, genre.genreDesc as Genre from library.books
		join author on books.authorID=author.authorID
		join genre on genre.genreDesc=books.genreDesc
	   where library.author.lastName like ?`,
	readGenresByDescriptionSearch:
		`select bookID as bookID, title as title, authorID as authorID, genreDesc as genre from library.books
	   where library.books.genreDesc like ?`,
	readGenresByGenreId:
		`select bookID as bookID, title as title, authorID as authorID, publishedDate as publishedDate, ISBN as ISBN, price as price, genreDesc as genreDesc from library.books
	   where library.books.bookID = ?`,
	createGenre:
		`insert into genre(genreDesc) values(?)`,
	updateGenre:
		`update library.genre set genreDesc=? where genreID = ?`,
	deleteGenre:
		`delete from library.genre where genreID = ?`,
}

