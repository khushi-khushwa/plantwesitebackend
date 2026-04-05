import mongoose from "mongoose";

 const cartProduct = new mongoose.Schema ({
    cartId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"plants"
    }
 })

 const Cart =  mongoose.model ('cart', cartProduct);
 export default Cart