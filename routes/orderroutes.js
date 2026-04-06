import { orderitem, cancelorder, showOrder, } from "../controllers/orderController.js";
import express from "express";
const router = express.Router();

 router.post('/orderPlant', orderitem);
 router.delete('/cancelorder/:id',cancelorder);
 router.get('/allorder',showOrder);

 
 export default router;