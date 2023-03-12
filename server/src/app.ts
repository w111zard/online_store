import express from 'express'
import { exit } from 'process'
import expressFileUpload from 'express-fileupload'
require('express-async-errors')
import connection from './utils/connection'
import router from './routes'
import errorMiddleware from './middlewares/errorMiddleware'

import { Type, Brand, Product, ProductInfo, Role, User } from './models'

const app = express()

app.use(express.json())
app.use(expressFileUpload({}))
app.use('/api', router)
app.use(errorMiddleware)

const startDatabase = async () => {
    try {
        await connection.authenticate()
        await connection.sync({ force: true })
    } catch(error) {
        console.log(error)
        exit(1)
    }
}
 
const startServer = () => {
    app.listen(3000)
}

const start = async () => {
    await startDatabase() 
    console.log('Connected to the database successfully!')

    startServer()
    console.log('Server has been started successfully!')

    await User.create({
        email: 'admin',
        password: '1234',
        roles: [
            { name: 'admin' }
        ]
    }, { include: Role })

    await User.create({
        email: 'user',
        password: '1234',
        roles: [
            { name: 'user' }
        ]
    }, { include: Role })

    await User.create({
        email: 'user_admin',
        password: '1234',
        roles: [
            { name: 'user' },
            { name: 'admin' }
        ]
    }, { include: Role })

}

export default start