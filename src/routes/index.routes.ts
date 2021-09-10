import express from 'express'
import { UserRoutesApi } from './user.route'


export class MainRouter{
    router:express.Router
    constructor(){
        this.router= express.Router()
        this.routes()
    }
    routes(){
        this.router.all('/', (req,res)=>{
            res.redirect('/swagger')
        })
        this.router.use('/user', UserRoutesApi)
    }
}
export const MainRouterApi = new MainRouter().router;