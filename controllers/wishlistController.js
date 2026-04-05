 
import Wishlist from "../models/wishlist.js";

export const addToWishlist = async (req, res) => {
  try {
    const productId = req.params.id;

    const exists = await Wishlist.findOne({ productId });

    if (exists) {
      return res.status(200).json({ message: "Already in wishlist" });
    }

    const newItem = new Wishlist({ productId: req.params.id  });

    await newItem.save();

    res.status(201).json({
      message: "Product added to wishlist ✅",
      data: newItem
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

 export const getWishlist = async (req, res) => {
  try {
    const data = await Wishlist.find();

    res.status(200).json(data);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching wishlist" });
  }
};

export const deleteWishlistProduct = async (req,res) => {
    try{
        const deleteId = req.params.id;
        console.log(deleteId)
        const d = await Wishlist.deleteOne({ productId: deleteId });
           console.log("item delete")
        if( d.deletedCount === 0){
            return res.status(404).json({message:"Item not found"})
        }
                   res.status(200).json({
            message:"Item removed from wishlist",
            data:d
           });
    }catch(err){
console.log(err);
res.status(500).json({message:"server error"});
    }
};