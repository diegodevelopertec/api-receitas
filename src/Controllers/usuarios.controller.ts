import { Request,Response, application } from "express"
import { usuariosModel } from "../Models/usuarios.model";
import jwt from 'jsonwebtoken'
import  z  from 'zod';
import dotenv from 'dotenv'


dotenv.config()
export const userController={
    getAllUsers:async(req:Request,res:Response)=>{
        try{
            let users=await usuariosModel.findAll()
            res.json(users)
    
        }catch(e){
            res.status(404).json(e)
            console.log(e)
         }
    },
    getUserById:async(req:Request,res:Response)=>{
        try{
            let {id}=req.params
            let user=await usuariosModel.findOne(
                {where:{id}}
            )
           if(user){
            res.json(user)
           }else{
            res.json({'message':'usuário não existe'})
        }
    
        }catch(e){
            res.json(e)
        }
    },
    register:async(req:Request,res:Response)=>{
        try{
            let {email,senha,nome}=req.body
            const newUser={email,senha,nome}
         
            if(email && senha && nome){
                let hasUser=await usuariosModel.findOne({
                    where:{email,senha}
                })
                if(!hasUser){
                    try {
                        const user=await usuariosModel.create({email,senha,nome})
                        const token=jwt.sign({email:user.email,password:user.senha,id:user.id},process.env.JWTKEY as string)
                        res.json({user,token,status:true})
                      } catch (error) {
                        res.json(error)
                        console.error('Erro de validação:', error);
                      }
                    
                }else{
                    res.json('usuário já existe')
                }
            }else{
                res.json('alguma informação não foi enviada')
            }

        }catch(e){
            res.json(e)
            console.log(e)

           }
    },
    sigIn:async(req:Request,res:Response)=>{
        if(req.method === 'POST'){
            try{
                let {email,senha}=req.body
                if(email && senha ){
                    let user=await usuariosModel.findOne({
                        where:{email,senha}
                    })
                    if(user){
                        const token=jwt.sign(
                            {email,senha},
                            process.env.JWTKEY as string
                        )
                     res.json({status:true,token,user})
                    }else{
                        res.json({message:'usuário não existe',status:false})
                    }
                }else{
                    res.json('email e/ou senha não enviados')
                }
    
            }catch(e){
                res.json(e)
                console.log(e)
    
               }
        }
    },
    updateUserById:async(req:Request,res:Response)=>{
        try{
            let {id}=req.params
            let {nome,senha,email}=req.body
           
            let user=await usuariosModel.findByPk(parseInt(id as string))
            if(user){
                if(nome && senha && email ){
                    user.senha=senha
                    user.nome=nome
                    user.email=email
                    user.save()
                   res.json({success:'atualiado com sucesso'}) 
                }
              
            }else{
                res.json({'message':'usuário não existe'})
            }
    
        }catch(e){
            res.json(e)
        }
    },
    deleteUserById:async(req:Request,res:Response)=>{
        try{
            let {id}=req.params
            let user=await usuariosModel.findOne({where:{id}})
            if(user){
                await usuariosModel.destroy({
                    where:{id}
                })
                res.json({'message':'usuário deletado'})
            }else{
                res.json({'message':'usuário não existe'})
            }
    
    
        }catch(e){
            res.json(e)
        }
    }
}