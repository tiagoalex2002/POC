import joi from "joi"
import { Movie } from "protocols/types"

const movieSchema= joi.object<Movie>({
    name: joi.string().required(),
    platform: joi.string().required(),
    genre: joi.string().required()
});

export default movieSchema;