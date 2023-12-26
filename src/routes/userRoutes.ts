/**************************************************************************************
 *  Objetivo: ROTAS DO CRUD DE USUÁRIO
 *  Autor: Luiz Gustavo e Yasmin Gonçalves
 *  Data: 26/12/2023
 *  Versão: 1.0
 **************************************************************************************/
import Express, { Router, Request, Response } from 'express'
import * as userController from '../controllers/UserController'
import { UserPost } from '../interfaces/User'

const routerUser: Router = Express.Router()

routerUser.get('/', async (request: Request, response: Response) => {
    const dataUser = await userController.getUsers()

    response.status(dataUser.status)
    response.json(dataUser)
})

routerUser.get('/:id', async (request: Request, response: Response) => {
    const id = request.params.id

    const dataUser = await userController.getUserId(Number(id))

    response.status(dataUser.status)
    response.json(dataUser)
})

routerUser.post('/', async (request: Request, response: Response) => {
    const { nome, email } = request.body
    const data: UserPost = {
        nome: nome,
        email: email
    }

    const dataUser = await userController.createUser(data)

    response.status(dataUser.status)
    response.json(dataUser)
})

routerUser.put('/:id', async (request: Request, response: Response) => {
    const id = request.params.id
    const { nome, email } = request.body
    const data: UserPost = {
        nome: nome,
        email: email
    }

    const dataUser = await userController.updateUser(data, Number(id))

    response.status(dataUser.status)
    response.json(dataUser)
})

routerUser.delete('/:id', async (request: Request, response: Response) => {
    const id = request.params.id

    const user = await userController.deleteUser(Number(id))

    response.status(user.status)
    response.json(user)
})

export default routerUser