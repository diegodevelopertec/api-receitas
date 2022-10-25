
import { Request,Response } from "express";
import { revenues } from "../Models/revenuesModel";


export  const createRevenues=async(req:Request,res:Response)=>{

    let {title,content,image,description}=req.body
    if(title && content && image && description){
        let newRevenue=await revenues.create({title,content,image,description})
         res.status(200).json({concluido:{newRevenue}})

    }else{
        res.json({erro:'Necessário enviar todos os dados'})
    }



}


export  const getAllRevenues=async(req:Request,res:Response)=>{
   
    let receitas=await revenues.findAll()
    res.status(200).json({receitas})



}



export  const getOneRevenue=async(req:Request,res:Response)=>{

    let {id}=req.params
    let receita=await revenues.findByPk(id)
    if(receita){
        res.status(200).json({receita})
    }res.json({erro:'receita não existe'})

}

export  const updateRevenue=async(req:Request,res:Response)=>{
    let {id}=req.params
    let {title,content,description,image}=req.body
    let receita=await revenues.findByPk(id)
    if(receita){
       receita.title=title
       receita.image=image
       receita.content=content
       receita.description=description
       await receita.save()
        res.json({receita})
    }else{
        res.json({erro:'receita não existe'})
    }
    
}
export  const deleteRevenue=async(req:Request,res:Response)=>{
    let {id}=req.params
    await revenues.destroy({where:{id}})
    res.json({concluido:'receita excluida'})

}