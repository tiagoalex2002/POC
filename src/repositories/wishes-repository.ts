import { Movie } from "protocols/types";
import { connection } from "database/database";


export async function createMovie(movie: Movie){
    return connection.query(`INSERT INTO movies (name, platform, genre, status ) VALUES ($1, $2, $3, $4)`, [movie.name, movie.platform, movie.genre, false])
}

export function updateMovie(name: string){
    return connection.query(`UPDATE movies SET status= $1 WHERE name = $2 `, [true, name])
}

export function deleteMovie(name:string){
    return connection.query(`DELETE FROM movies WHERE name= $1`, [name])
}

export async function getMovies(){
    return connection.query(`SELECT * FROM movies`);
}

export function findMovie(name: string){
    return connection.query(`SELECT * FROM movies WHERE name= $1`, [name])
}
