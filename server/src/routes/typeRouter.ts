import { Router } from "express";
import typeController from "../controllers/typeController";
const router = Router()

router.post('/', typeController.create.bind(typeController))
router.get('/', typeController.getAll.bind(typeController))
router.get('/:id', typeController.getOne.bind(typeController))
router.patch('/', typeController.update.bind(typeController))
router.delete('/:id', typeController.delete.bind(typeController))

export default router