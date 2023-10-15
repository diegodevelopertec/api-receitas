import { DataTypes, Model } from "sequelize"
import { sequelizeConnection } from "../config/sequelize.config"
import { usuariosModel } from "./usuarios.model"

export interface receitasInterface extends Model {
    id:number,
    iduser:number,
    titulo:string,
    ingredientes:string,
    preparo:string

}

export const receitasModel=sequelizeConnection.define<receitasInterface>('receitasModel',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    iduser:{
        type:DataTypes.INTEGER,
    },
    titulo:{
        type:DataTypes.STRING,
        
    },
    ingredientes:{
        type:DataTypes.TEXT,
    
    },
    preparo:{
        type:DataTypes.TEXT,
    
    }
},{
    tableName: 'receitas',
    timestamps:false 
})

usuariosModel.hasMany(receitasModel,{foreignKey:'iduser'})
receitasModel.belongsTo(usuariosModel,{foreignKey:'iduser'})