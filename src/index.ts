import express from 'express'
import dotenv from 'dotenv'
import Routes from '../src/Routes'
import cors from 'cors'
dotenv.config()

const api=express()
api.use(express.urlencoded({extended:true}))
api.use(cors({origin:'*'}))
api.use(Routes)
api.listen(process.env.PORT )