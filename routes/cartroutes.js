
import express from "express";
import { getCartItem,deleteCartItem,addCartItem } from "../controllers/cartController.js";

const router = express.Router();

router.get('/get/product', getCartItem);
router.post('/post/product/:id', addCartItem);
router.delete('/delete/product/:id', deleteCartItem)
export default router;