import { userModel } from "../models/user.model";
import { IUser } from "../types/documents/user.document";




export class UserRepository{
    constructor(){}
    saveUser(user: IUser){
        return new userModel(user).save()
    }
    
}