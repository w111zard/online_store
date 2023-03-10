import { Router } from "express"

import userRouter from './userRouter'
import roleRouter from './roleRouter'

const router = Router()


router.use('/user', userRouter)
router.use('/role', roleRouter)

export default router