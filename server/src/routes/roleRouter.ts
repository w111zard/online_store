import { Router } from "express";
import roleController from "../controllers/roleController";
const router = Router()

router.post('/', roleController.create)
router.get('/', roleController.getAll)
router.get('/:id', roleController.getOneById)
router.patch('/', roleController.update)
router.delete('/:id', roleController.delete)

export default router