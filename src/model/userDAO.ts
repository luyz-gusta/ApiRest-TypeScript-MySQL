/**************************************************************************************;
 *  Objetivo: Model responsável por gerenciar funções de dados do database
 *  Autor: Luiz Gustavo e Yasmin Gonçalves
 *  Data: 26/12/2023
 *  Versão: 1.0
 **************************************************************************************/

import { PrismaClient } from '@prisma/client'
import { UserAll, UserPost } from '../interfaces/User'
const prisma = new PrismaClient()

async function selectUserLastId(): Promise<UserAll> {
    const sql = 'select * from tbl_user order by id desc limit 1'

    const rsUser = await prisma.$queryRawUnsafe(sql)

    return rsUser[0]
}

async function insertUser(data: UserPost): Promise<boolean> {
    const sql = `insert into tbl_user(
        nome,
        email
    )values(
        '${data.nome}',
        '${data.email}'
    )`

    const resultStatus = await prisma.$executeRawUnsafe(sql)

    if (resultStatus) {
        return true
    } else {
        return false
    }
}

async function selectUserByEmail(email: string): Promise<boolean> {
    const sql = `select * from tbl_user where email = '${email}'`

    const rsUser = await prisma.$queryRawUnsafe(sql)

    if (rsUser != '') {
        return true
    } else {
        return false
    }
}

async function selectAllUsers(): Promise<Array<UserAll>> {
    const sql = 'select * from tbl_user'

    const rsUser: Array<UserAll> = await prisma.$queryRawUnsafe(sql)

    return rsUser
}

async function selectUserById(id: number): Promise<Array<UserAll>> {
    const sql = `select * from tbl_user where id = ${id}`

    const rsUser: Array<UserAll> = await prisma.$queryRawUnsafe(sql)

    return rsUser
}

async function updateUser(data: UserPost, id: number): Promise<boolean> {
    const sql = `update tbl_user set nome = '${data.nome}', email = '${data.email}' where id = ${id};`

    const resultStatus = await prisma.$executeRawUnsafe(sql)

    if (resultStatus) {
        return true
    } else {
        return false
    }
}

async function deleteUserById(id: number): Promise<boolean> {
    const sql = `delete from tbl_user where id = ${id};`

    const resultStatus = await prisma.$executeRawUnsafe(sql)

    if (resultStatus) {
        return true
    } else {
        return false
    }
}

export {
    selectAllUsers,
    selectUserById,
    selectUserByEmail,
    selectUserLastId,
    insertUser,
    updateUser,
    deleteUserById
}