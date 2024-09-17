export const genreQueries = {
	readGenres:
		`select id as albumId, title as title, artist as artist, description as description, year as year, image as image from music.albums`,
	readGenresByAuthor:
		`select id as albumId, title as title, artist as artist, description as description, year as year, image as image from music.albums
	   where music.albums.artist = ?`,
	readGenresByAuthorSearch:
		`select id as albumId, title as title, artist as artist, description as description, year as year, image as image from music.albums
	   where music.albums.artist like ?`,
	readGenresByDescriptionSearch:
		`select id as albumId, title as title, artist as artist, description as description, year as year, image as image from music.albums
	   where music.albums.description like ?`,
	readGenresByGenreId:
		`select id as albumId, title as title, artist as artist, description as description, year as year, image as image from music.albums
	   where music.albums.id = ?`,
	createGenre:
		`insert into albums(title, artist, description, year, image) values(?,?,?,?,?)`,
	updateGenre:
		`update music.albums set title=?, artist=?, year=?, image=?, description=? where id = ?`,
	deleteGenre:
		`delete from music.albums where id = ?`,
}

