import Order from "../models/order.js";


export const orderitem = async (req, res) => {
    try {
        const {
            category, date, discount, dispatch, fakeprice,
            origin, price, productId, quantity,
            shippingCharges, totalpay, user,image
        } = req.body;

      
      

        const sa = new Order({
            category, date, discount, dispatch, fakeprice,
            origin, price, productId, quantity,
            shippingCharges, totalpay, user,image
        });

        await sa.save();

        return res.status(201).json({
            message: "Order placed successfully",
            data: sa
        });

    } catch (error) {
        // Bug 3 fixed — 500 use karo
        return res.status(500).json({ 
            message: "Internal server error", 
            error: error.message 
        });
    }
}

export const showOrder = async (req, res) =>{
    try{
        
         const s = await Order.find()
           res.status(200).json({message:s})

    }catch (error){
        res.status(400).json({message:"your product is  not order"})
    }
}


export const cancelorder = async (req, res)=>{
    try{
       await Order.findByIdAndDelete(req.params.id);

        res.status(200).json({message:"your order is cancel"});
    }catch(error){
        res.status(400).status({message:'your order is not cancel'})
    }

}



