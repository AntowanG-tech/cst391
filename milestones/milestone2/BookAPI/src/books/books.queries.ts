export const bookQueries = {
    createBook:
        `insert into tracks (genre_id, title, number, video_url) VALUES(?,?,?,?)`,
    readBooks:
        `select title as title, video_url as video, lyrics as lyrics from music.tracks where album_id = ?`,
    updateBook:
        `update books.books set title =?, number = ?, video_url = ?, lyrics = ? where id = ?;`
}
