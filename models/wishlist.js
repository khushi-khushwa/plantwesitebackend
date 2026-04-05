import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
     
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"plants"
    }
})

const Wishlist = mongoose.model('wishlistProduct', wishlistSchema);

 export default Wishlist;