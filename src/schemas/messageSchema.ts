import {z} from "zod";

const messageSchema = z.object({
    content:z
    .string()
    .min(10,"content must be at least 10 characters")
    .max(300,"content must not be more than 300 characters")
})

export default messageSchema