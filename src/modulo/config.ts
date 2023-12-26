/**************************************************************************************;
 *  Objetivo: Responsável pelas constantes globais
 *  Autor: Luiz Gustavo e Yasmin Gonçalves
 *  Data: 26/12/2023
 *  Versão: 1.0
 **************************************************************************************/

/************************** CONSTANTES DE ERROS **********************/
const ERROR_REQUIRED_TOKEN = {status: 401, message: 'Token não fornecido.'}
const ERROR_INVALID_TOKEN = {status: 401, message: 'Token inválido.'}
const ERROR_CADASTRO = {status: 422, message: 'Erro não é permitido cadastrar o mesmo email.'}
const ERROR_INTERNAL_SERVER = {status: 500, message: 'Servidor está fora do ar, tente mais tarde.'}
const ERROR_REGISTER_NOT_FOUND= {status: 404, message: 'O servidor não encontrou o recurso solicitado.'}
const ERROR_REQUIRE_FIELDS = {status: 400, message: 'Não foram preenchidos todos os campos os obrigatórios.'}

/************************** CONSTANTES DE SUCESSO **********************/
const SUCCESS_CREATED_USER = {status: 201, message: 'Usuário criado com sucesso!'}
const SUCCESS_UPDATED_USER = {status: 200, message: 'Usuário atualizado com sucesso!'}
const SUCCESS_REQUEST = {status: 200, message: 'Requisição bem sucedida.'}
const SUCCESS_DELETED_USER = {status: 200, message: 'Usuário deletado com sucesso!'}

export{
    //ERROR
    ERROR_CADASTRO,
    ERROR_INTERNAL_SERVER,
    ERROR_REQUIRED_TOKEN,
    ERROR_INVALID_TOKEN,
    ERROR_REGISTER_NOT_FOUND,
    ERROR_REQUIRE_FIELDS,

    //SUCCESS
    SUCCESS_REQUEST,
    SUCCESS_CREATED_USER,
    SUCCESS_UPDATED_USER,
    SUCCESS_DELETED_USER
}