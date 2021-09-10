import {Schema, model} from "mongoose"
import { IUser } from "../types/documents/user.document"


const userSchema = new Schema({
name:{
    type:String
},
password:{
    type:String
}
},{
    timestamps:true
})

export const userModel = model<IUser>('user',userSchema)