import {z} from "zod";

const verifySchema = z.object({
    code:z
    .string()
    .length(6,"code must be 6 characters")

})

export default verifySchema