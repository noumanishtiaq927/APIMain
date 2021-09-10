import { Body, Post, Route } from "@tsoa/runtime";
import { UserRepository } from "../repositories/user.repository";
import { IUserAdd } from "../types/requests/user.request";
import { IUserAddResponse } from "../types/responses/user.response";
import ErrorHandler from "../utils/error";

@Route('user')

export class UserController{
    constructor(){}

    @Post('/saveUser')
    async saveUser(@Body() saveUserReq:IUserAdd):Promise<IUserAddResponse>{
        const newUser= await new UserRepository().saveUser(<any> saveUserReq)
        if(newUser === null) throw new ErrorHandler(404, 'Not Found')
        return newUser
}
}