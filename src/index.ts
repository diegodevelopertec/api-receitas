import express,{Request,Response} from 'express'
import dotenv from 'dotenv'

dotenv.config()

const api=express()
api.get('/', (req:Request, res:Response) =>res.send('hello world'))
api.listen(process.env.PORT,()=>console.log(`http://localhost:${process.env.PORT}`))

