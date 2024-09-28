import mongoose,{Schema,Document} from "mongoose";
import Message, { messageSchema } from "./message.model";
export interface User extends Document{
    username:string,
    email:string,
    password:string,
    messages:Message[]
    verifyCode:string,
    verifyCodeExpiry:Date,
    isAcceptingMessage:boolean,
    isVerified:boolean
}

const userSchema:Schema<User> = new Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    messages:[messageSchema],
    verifyCode:{
        type:String,
    },
    verifyCodeExpiry:{
        type:Date,
    },
    isAcceptingMessage:{
        type:Boolean,
    },
    isVerified:{
        type:Boolean,
    },
})


const User = mongoose.models.users as mongoose.Model<User> || mongoose.model("users",userSchema)

export default User