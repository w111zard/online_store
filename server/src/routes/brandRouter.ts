import { Router } from "express";
import brandController from "../controllers/brandController";
const router = Router()

router.post('/', brandController.create.bind(brandController))
router.get('/', brandController.getAll.bind(brandController))
router.get('/:id', brandController.getOne.bind(brandController))
router.patch('/', brandController.update.bind(brandController))
router.delete('/:id', brandController.delete.bind(brandController))

export default router