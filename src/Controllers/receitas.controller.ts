import { Request,Response } from "express"
import { receitasModel } from "../Models/receitas.model"

export const receitasController={

    getAllReceitas:async(req:Request,res:Response)=>{
        try{
            const receitasList=await receitasModel.findAll()
            res.json(receitasList)
        }catch(e){
            res.json(e)
        }
    },
    getReceitaById:async(req:Request,res:Response)=>{
        try{
            const {id}=req.params
            const receitaId=await receitasModel.findOne({where:{id}})
            if(receitaId){
                res.json(receitaId)
            }else{
                res.json({message:'receita não existe'})
            }
        }catch(e){
            res.json(e)
        }
    },
    postReceita:async(req:Request,res:Response)=>{
        try{
            const {titulo,iduser,ingredientes,preparo}=req.body
            if(titulo !== '' && ingredientes !== '' && preparo !== ''){
                const novaReceita=await receitasModel.create({titulo,iduser,ingredientes,preparo})
                if(novaReceita){
                    res.json(novaReceita)
                }else{
                    res.json('algo deu errado')
                }
            }else{
                res.json('alguma informação não foi enviada')
            }



        }catch(e){
            res.json(e)
        }
    },
    updateReceitaById:async(req:Request,res:Response)=>{
        try{
            const {titulo,ingredientes,preparo}=req.body
            const {id}=req.params
            const receitaId=await receitasModel.findByPk(id)
            if(titulo !== '' && ingredientes !== '' && preparo !== ''  ){
             
                if(receitaId){
                receitaId.titulo=titulo
                receitaId.ingredientes=ingredientes
                receitaId.preparo=preparo
                await receitaId.save()
                res.json(receitaId)
                }else{
                    res.json('algo deu errado')
                }
            }else{
                res.json('alguma informação não foi enviada')
            }



        }catch(e){
            res.json(e)
        }
    },
    deleteReceitaById:async(req:Request,res:Response)=>{
        try{
            const {id}=req.params
            await receitasModel.destroy({where: {id:id}})
            res.json('receita deletada')
        }catch(e){
            res.json(e)
        }
    }


}