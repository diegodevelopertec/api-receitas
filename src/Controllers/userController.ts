import { Request,Response } from "express";
import { unwatchFile } from "fs";
import { mysqlConnection } from "../Connection/mysql";
import { users } from "../Models/userModel";
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'



dotenv.config()
export  const Login=async(req:Request,res:Response)=>{

    let {email,password}=req.body
    if( email && password){
        let user=await users.findOne({where:{email,password}})
        if(user){
         
            let token=jwt.sign(
                {email:user.email,password:user.password},
                 process.env.JWT_kEY as string,
                 {expiresIn:'3h'}
                )
                res.status(200).json({status:true,token})
                
         }else{
            res.json({erro:'usuário não existe'})
        }



    }else{
        res.json({erro:'Envie todos os dados'})
    }






}

export  const Register=async(req:Request,res:Response)=>{
let {name,email,password}=req.body
    if(name && email && password){
        let user=await users.findOne({where:email})
        if(!user){
            let newUser=await users.create({email,name,password})
            let token=jwt.sign(
                {email:newUser.email,password:newUser.password},
                 process.env.JWT_kEY as string,
                 {expiresIn:'3h'}
                )
                res.status(200).json({status:true,token,newUser})
                
         }else{
            res.json({erro:'usuário já existe'})
        }



    }else{
        res.json({erro:'Envie todos os dados'})
    }








}
export  const getUser=async(req:Request,res:Response)=>{

   











}
export  const updateUser=async(req:Request,res:Response)=>{


    
}
export  const deleteUser=async(req:Request,res:Response)=>{

}