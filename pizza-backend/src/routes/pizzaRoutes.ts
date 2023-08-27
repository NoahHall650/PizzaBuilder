import { Router } from 'express';
import { getAllToppings, addPizza } from '../controllers/pizzaController';

const router = Router();

router.get('/', getAllToppings);
router.post('/', addPizza);

export default router;
