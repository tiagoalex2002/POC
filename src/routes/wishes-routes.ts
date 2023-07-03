import { Router } from "express";
import validateSchema from "middleware/validateSchema";
import movieSchema from "schemas/movie-schema";
import nameSchema from "schemas/name-schema";
import { createMovie, getMovies , deleteMovie, updateMovie} from "controllers/wishes-controller";



const moviesRouter= Router()

moviesRouter.post("/movies",validateSchema(movieSchema), createMovie)
moviesRouter.get("/movies",getMovies)
moviesRouter.delete("/movies",validateSchema(nameSchema),  deleteMovie)
moviesRouter.post("/updates", validateSchema(nameSchema) ,updateMovie)

export default moviesRouter;