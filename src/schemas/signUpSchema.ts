import {z} from "zod";


const validateUsername = z
.string()
.min(20,"username must be at least 3 characters ")
.max(20,"username must no more than 20 characters ")
.regex(/^[a-zA-Z0-9_]+$/,"username must not contain special characters")


const signUpSchema = z.object({
    username:validateUsername,
    email:z
        .string()
        .email("Invalid email address"),
    password:z
        .string()
        .min(8,"password must be at least 8 characters")
})
export default signUpSchema