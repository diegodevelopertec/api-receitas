import { Request,Response,Router} from "express";
import { userController } from "../Controllers/usuarios.controller";
import { receitasController } from "../Controllers/receitas.controller";

const Routes=Router()


Routes.get('/receitas')
Routes.post('/receitas')
Routes.get('/receitas/:id')
Routes.put('/receitas/:id')
Routes.delete('/receitas/:id')

Routes.get('/usuarios',userController.getAllUsers)
Routes.post('/auth/login',userController.sigIn)
Routes.post('/auth/register',userController.register)
Routes.get('/usuarios/:id',userController.getUserById)
Routes.put('/usuarios/:id',userController.updateUserById)
Routes.delete('/usuarios/:id',userController.deleteUserById)


Routes.get('/receitas',receitasController.getAllReceitas)
Routes.post('/receitas',receitasController.postReceita)
Routes.get('/receitas/:id',receitasController.getReceitaById)
Routes.put('/receitas/:id',receitasController.updateReceitaById)
Routes.delete('/receitas/:id',receitasController.deleteReceitaById)

export default Routes