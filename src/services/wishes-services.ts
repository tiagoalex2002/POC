import {Movie} from "protocols/types"
import * as movieRepository from "../repositories/wishes-repository"


export  async function createMovie(movie: Movie){
    const result = await movieRepository.findMovie(movie.name)
    if (result){
        return 500
    }
    else{
        return movieRepository.createMovie(movie)
    }
}

export async function getMovies(){
    const result= await movieRepository.getMovies();
    return result.rows;
}

export async function updateMovie(name: string){
    const result= await movieRepository.findMovie(name)
    if (!result){
        return 500
    }
    else{
        let status= result.rows[0].status
        if (status === false){
            return movieRepository.updateMovie(name)
        }
        else if( status === true){
            return 300
        }
    }
}

export async function deleteMovie(name: string){

    const result= await movieRepository.findMovie(name)
    if (!result){
        return 500
    }
    return movieRepository.deleteMovie(name)
}