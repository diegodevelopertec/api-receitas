import { Router } from "express";
import * as userController  from '../Controllers/userController'
import * as revenuesController  from '../Controllers/revenuesController'






const Routes=Router()
Routes.post('/api/register',userController.Register)
Routes.post('/api/login',userController.Login)
Routes.get('/api/login:id',userController.getUser)
Routes.put('/api/user/:id',userController.updateUser)
Routes.delete('/api/user/:id',userController.deleteUser)



Routes.get('/api/revenues',revenuesController.getAllRevenues)
Routes.post('/api/revenues/',revenuesController.createRevenues)
Routes.get('/api/revenues/:id',revenuesController.getOneRevenue)
Routes.put('/api/revenues/:id',revenuesController.updateRevenue)
Routes.delete('/api/revenues/',revenuesController.deleteRevenue)



export default Routes