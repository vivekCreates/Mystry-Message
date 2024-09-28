import {z} from "zod";

const acceptMessages = z.object({
    messages: z.boolean()
})

export default acceptMessages