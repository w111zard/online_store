import { Router } from "express";
import roleController from "../controllers/roleController";
const router = Router()

router.post('/', roleController.create.bind(roleController))
router.get('/', roleController.getAll.bind(roleController))
router.get('/:id', roleController.getOne.bind(roleController))
router.patch('/', roleController.update.bind(roleController))
router.delete('/:id', roleController.delete.bind(roleController))

export default router