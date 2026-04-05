import Cart from "../models/cart.js";

export const  addCartItem = async (req, res) =>{
       try{
          const cartId = req.params.id ;

             const exists = await Cart.findOne({cartId});
              if(exists){
                res.status(404).json({
                    message:"Item already exits"
                })
              }
           const cartAdd = new Cart({cartId});

           await cartAdd.save();

           res.status(200).json({
             message:"add to cart"
           })
       }catch(err){
        console.log("error", err)
       }
}


export const  getCartItem = async (req, res) =>{
       try{
          const allData = await Cart.find();

           res.status(200).json({
            allData
           })
       }catch(err){
        console.log("error", err);
        res.status(404).json({message:"error"})
       }
}
export const deleteCartItem = async (req,res) => {
    try{
        const deleteId = req.params.id;
        console.log(deleteId)
        const d = await Cart.deleteOne({ cartId: deleteId });
           console.log("item delete")
        if( d.deletedCount === 0){
            return res.status(404).json({message:"Item not found"})
        }
                   res.status(200).json({
            message:"Item removed from cart",
            data:d
           });
    }catch(err){
console.log(err);
res.status(500).json({message:"server error"});
    }
};

