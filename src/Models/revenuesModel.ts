import {Model,DataTypes} from 'sequelize'
import { mysqlConnection } from '../Connection/mysql'



export interface revenuesModel extends Model{

     id:number,
     iduser:number,
     title:string,
    content:string,
    description:string,
    image:string

}


export const revenues=mysqlConnection.define<revenuesModel>('receitas',
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        iduser:{
            type:DataTypes.INTEGER,
          
        },
        title:{
            type:DataTypes.STRING
        },
       content:{
            type:DataTypes.STRING
        },
      description:{
            type:DataTypes.STRING
        },
        image:{
            type:DataTypes.STRING
        }

        
    },{
        tableName:'receitas',timestamps:false
    })