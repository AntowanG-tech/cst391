export const genreQueries = {
	readGenres:
		`select genreID as ID, genreDesc as Genre`,
	createGenre:
		`insert into genre(genreDesc) values(?)`,
	updateGenre:
		`update library.genre set genreDesc=? where genreID = ?`,
}

