import { Request, Response } from "express";
import httpStatus from "http-status";
import * as movieServices from "../services/wishes-services"
import { Movie } from "protocols/types";
import { Name } from "protocols/types";

export  async function createMovie(req: Request, res: Response){
    const movie = req.body as Movie;
    const result= await movieServices.createMovie(movie)

    if(result===500){
        return res.sendStatus(httpStatus.CONFLICT)
    }
    else{
        return res.sendStatus(httpStatus.CREATED)
    }
}

export function getMovies(req: Request, res: Response){
    const movies= movieServices.getMovies()
    res.send(movies)
}

export async function deleteMovie(req: Request, res: Response){
    const body= req.body as Name;
    const result = await movieServices.deleteMovie(body.name)

    if( result === 500){
        res.sendStatus(500)
    }
    else{
        res.sendStatus(httpStatus.OK)
    }

    res.sendStatus(httpStatus.OK)
    
}

export async function updateMovie(req: Request, res: Response){
    const body= req.body as Name;
    const result= await movieServices.updateMovie(body.name)

    if( result === 500){
        res.sendStatus(500)
    }
    else if( result === 300){
        res.status(500).send("O filme em questão já foi visualizado")
    }
    else{
        res.sendStatus(httpStatus.OK)
    }

}