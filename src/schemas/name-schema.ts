import joi from "joi"
import { Name} from "protocols/types"

const nameSchema= joi.object<Name>({
    name: joi.string().required()
});

export default nameSchema;