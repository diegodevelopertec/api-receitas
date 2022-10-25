import {Model,DataTypes} from 'sequelize'
import { mysqlConnection } from '../Connection/mysql'



export interface userModel extends Model{

    id:number,
    name:string,
    email:string,
    password:string,
    image:string

}


export const users=mysqlConnection.define<userModel>('user',
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        },
        image:{
            type:DataTypes.STRING
        }

        
    },{
        tableName:'users',timestamps:false
    })