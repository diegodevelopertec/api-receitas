import express,{Request,Response, urlencoded} from 'express'
import dotenv from 'dotenv'
import Routes from './Routes'
import cors from 'cors'
dotenv.config()


const api=express()
api.use(cors())
api.use(urlencoded({extended:true}))
api.get('/', (req:Request, res:Response) =>res.send('hello world'))
api.use(Routes)
api.listen(process.env.PORT,()=>console.log(`http://localhost:${process.env.PORT}`))

