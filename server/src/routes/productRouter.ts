import { Router } from "express";
import productController from "../controllers/productController";
const router = Router()

router.post('/', productController.create.bind(productController))
router.get('/', productController.getAll.bind(productController))
router.get('/:id', productController.getOne.bind(productController))
router.patch('/', productController.update.bind(productController))
router.delete('/:id', productController.delete.bind(productController))

export default router