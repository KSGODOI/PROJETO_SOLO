import { Router, Request, Response, RequestHandler } from "express";

const router = Router()

router.get('/',(req:Request,res:Response) =>{
    res.render('home',{
        name:'Kayque',
        lastName:'Godoi',
        showWelcome:false
    })
})


router.get('/contato',(req:Request,res:Response) =>{
    res.render("contato")
})

router.get('/sobre',(req:Request,res:Response) =>{
    res.render("sobre")
})

export default router 