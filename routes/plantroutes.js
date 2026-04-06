import express from 'express';

import { getPlants , deletePlant, updatePlant} from '../controllers/plantControllers.js';




const router = express.Router();

router.get('/get', getPlants);
router.delete('/delete/:id', deletePlant);
router.put('/update/:id', updatePlant)
export default router;