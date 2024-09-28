import mongoose,{Schema,Document} from "mongoose"


interface Message extends Document{
    content:string,
    createdAt:Date
} 

export const messageSchema:Schema<Message> = new Schema({
    content:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})


 const Message = mongoose.models.messages as mongoose.Model<Message>|| mongoose.model<Message>("messages",messageSchema)

 export default Message