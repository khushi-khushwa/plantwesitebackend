import express from 'express';
// import upload from '../middlewares/uploadMiddleware.js';
// import {getPlants, addPlant} from '..controllers/plantController.js';
import { getPlants , addPlant, deletePlant, updatePlant} from '../controllers/plantControllers.js';

import upload from "../middlewares/uploadMiddleware.js";
// import { createProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/add-product", upload.single("image"), addPlant);
router.get('/get', getPlants);
router.delete('/delete/:id', deletePlant);
router.put('/update/:id', updatePlant)
export default router;