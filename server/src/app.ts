import express from 'express'
import { exit } from 'process'
import connection from './utils/connection'
import router from './routes'
import errorMiddleware from './middlewares/errorMiddleware'

import { Type, Brand, Product } from './models'

const app = express()

app.use(express.json())
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

    const type = await Type.create({ name: 'smartphone' })
    const brand = await Brand.create({ name: 'Samsung' })
    const product = await Product.create({
        name: 'Galaxy S20',
        price: 1990.90,
        image: 'samsung.png',
        typeId: 1,
        brandId: 1
    })
}

export default start