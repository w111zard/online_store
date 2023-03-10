import { Router } from "express"

import userRouter from './userRouter'
import roleRouter from './roleRouter'
import typeRouter from './typeRouter'
import brandRouter from './brandRouter'
import productRouter from './productRouter'

const router = Router()

router.use('/user', userRouter)
router.use('/role', roleRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/product', productRouter)

export default router