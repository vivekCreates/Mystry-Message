import {z} from "zod"

const signInSchema = z.object({
    email:z
        .string()
        .email("Invalid email address"),
    password:z
    .string()
    .min(8,"password must be at least 8 characters")
})

export  default signInSchema