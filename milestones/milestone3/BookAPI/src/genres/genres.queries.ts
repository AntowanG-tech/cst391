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
		`select id as albumId, title as title, artist as artist, description as description, year as year, image as image from music.albums
	   where music.albums.description like ?`,
	readGenresByGenreId:
		`select id as albumId, title as title, artist as artist, description as description, year as year, image as image from music.albums
	   where music.albums.id = ?`,
	createGenre:
		`insert into genre(genreDesc) values(?)`,
	updateGenre:
		`update library.genre set title=?, artist=?, year=?, image=?, description=? where id = ?`,
	deleteGenre:
		`delete from music.albums where id = ?`,
}

