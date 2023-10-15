import { sequelizeConnection } from "../config/sequelize.config";
import sequelize, { DataTypes, Model } from "sequelize";


interface UserInterface extends Model{
    id:number,
    nome:string,
    email:string,
    senha:string,
  


}


export const usuariosModel =sequelizeConnection.define<UserInterface>('users',
  {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nome:{
        type:DataTypes.STRING,
        allowNull:false
      
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
        
    },
    senha:{
        type:DataTypes.STRING,
        allowNull:false
       
    },
   
    
  },
    
       { tableName: 'usuarios',
        timestamps:false}
    
    



)