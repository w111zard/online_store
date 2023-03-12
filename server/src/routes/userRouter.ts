import { Router } from "express";
import userController from "../controllers/userController";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router()

router.post('/registration', userController.register)
router.post('/login', userController.login)
router.get('/auth', [authMiddleware(['admin'])], userController.check)

export default router