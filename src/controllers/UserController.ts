/**************************************************************************************;
 *  Objetivo: Classe da tabela usuário
 *  Autor: Luiz Gustavo e Yasmin Gonçalves
 *  Data: 26/12/2023
 *  Versão: 1.0
 **************************************************************************************/
import * as userDAO from '../model/userDAO'
import { UserAll, UserPost } from '../interfaces/User'
import * as config from '../modulo/config'

const getUsers = async () => {
    const listUser = await userDAO.selectAllUsers()

    return {
        error: false,
        status: config.SUCCESS_REQUEST.status,
        message: config.SUCCESS_REQUEST.message,
        data: listUser
    }
}

const getUserId = async (id: number) => {
    const listUser = await userDAO.selectUserById(id)

    if (listUser.length > 0) {
        return {
            error: false,
            status: config.SUCCESS_REQUEST.status,
            message: config.SUCCESS_REQUEST.message,
            data: listUser[0]
        }
    } else {
        return {
            error: true,
            status: config.ERROR_REGISTER_NOT_FOUND.status,
            message: config.ERROR_REGISTER_NOT_FOUND.message
        }
    }
}

const createUser = async (data: UserPost) => {

    if (
        data.nome == '' || data.nome.length > 255 || data.nome == null ||
        data.email == '' || data.email.length > 255 || data.email == null
    ) {
        return {
            error: true,
            status: config.ERROR_REQUIRE_FIELDS.status,
            message: config.ERROR_REQUIRE_FIELDS.message
        }
    } else {
        const userExist = await userDAO.selectUserByEmail(data.email)

        if (userExist) {
            return {
                error: true,
                status: config.ERROR_CADASTRO.status,
                message: config.ERROR_CADASTRO.message
            }
        } else {
            const dataUser = await userDAO.insertUser(data)

            if (dataUser) {
                const newUser = await userDAO.selectUserLastId()

                return {
                    error: false,
                    status: config.SUCCESS_CREATED_USER.status,
                    message: config.SUCCESS_CREATED_USER.message,
                    data: newUser
                }
            } else {
                return {
                    error: true,
                    status: config.ERROR_INTERNAL_SERVER.status,
                    message: config.ERROR_INTERNAL_SERVER.message
                }
            }
        }
    }
}

const updateUser = async (data: UserPost, id: number) => {

    if (
        data.nome == '' || data.nome.length > 255 || data.nome == null ||
        data.email == '' || data.email.length > 255 || data.email == null ||
        id == 0 || id == null
    ) {
        return {
            error: true,
            status: config.ERROR_REQUIRE_FIELDS.status,
            message: config.ERROR_REQUIRE_FIELDS.message
        }
    } else {
        const userExist = await userDAO.selectUserById(id)

        if (userExist.length == 0) {
            return {
                error: true,
                status: config.ERROR_REGISTER_NOT_FOUND.status,
                message: config.ERROR_REGISTER_NOT_FOUND.message
            }
        } else {
            const dataUser = await userDAO.updateUser(data, id)

            if (dataUser) {
                const updatedUser = await userDAO.selectUserById(id)

                return {
                    error: false,
                    status: config.SUCCESS_UPDATED_USER.status,
                    message: config.SUCCESS_UPDATED_USER.message,
                    data: updatedUser
                }
            } else {
                return {
                    error: true,
                    status: config.ERROR_INTERNAL_SERVER.status,
                    message: config.ERROR_INTERNAL_SERVER.message
                }
            }
        }
    }
}

const deleteUser = async (id: number) => {
    const userExist = await userDAO.selectUserById(id)

    if (userExist.length > 0) {
        const deleteUser = userDAO.deleteUserById(id)

        if (deleteUser) {
            return {
                error: false,
                status: config.SUCCESS_DELETED_USER.status,
                message: config.SUCCESS_DELETED_USER.message
            }
        } else {
            return {
                error: true,
                status: config.ERROR_INTERNAL_SERVER.status,
                message: config.ERROR_INTERNAL_SERVER.message
            }
        }
    } else {
        return {
            error: true,
            status: config.ERROR_REGISTER_NOT_FOUND.status,
            message: config.ERROR_REGISTER_NOT_FOUND.message
        }
    }
}

export {
    getUsers,
    getUserId,
    createUser,
    updateUser,
    deleteUser
}