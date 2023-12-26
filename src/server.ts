/**************************************************************************************;
 *  Objetivo: API REST utilizando TS e MySQL
 *  Autor: Luiz Gustavo e Yasmin Gonçalves
 *  Data: 26/12/2023
 *  Versão: 1.0
 **************************************************************************************/

import Express from 'express'
import cors from 'cors'
import routerUser from './routes/userRoutes'

const app = Express()
const PORT = 8080
const corsOptions = {
    origin: '*',
    methods: 'GET, POST, PUT, DELETE, OPTIONS, PATCH'
}

app.use(Express.json())
app.use(cors(corsOptions))

app.get('/', (request, response) => {
    return response.send({message: 'Hello World !!'})
})

app.use('/v1/user', routerUser)

app.listen(PORT, () => {
    console.log('====================================')
    console.log(`Server is running: ${PORT}`)
    console.log('====================================')
})
