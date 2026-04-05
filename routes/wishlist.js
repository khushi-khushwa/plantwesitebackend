import express from "express";
import { addToWishlist, deleteWishlistProduct, getWishlist } from "../controllers/wishlistController.js";

const router = express.Router();

router.get('/get/product', getWishlist);
router.post('/post/product/:id', addToWishlist);
router.delete('/delete/product/:id', deleteWishlistProduct)
export default router;