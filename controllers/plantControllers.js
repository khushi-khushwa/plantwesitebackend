import plant from '../models/plant.js';

export const getPlants = async (req, res) => {
    try {
       
        const plants = await plant.find();
        console.log(plants);
        res.json(plants);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const addPlant = async (req, res) => {
    try {
        if(!req.file){
            return res.status(400).json({message:"Image is required"});
        }

        //upload image
         const result =await cloudinary.uploader.upload( `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`,
        {folder:`plantstore/${req.body.category}`});

         const newProduct = new Product({
            ...req.body, 
            image:result.secure_url
         });
         await newProduct.save();

           res.status(201).json({
      message: "Product Created Successfully",
      product: newProduct
    });
    }catch (error) {
        res.status(400).json({ message: 'Error adding plant' });
    }
    // try {

    //     const { name, category, description, price } = req.body;
    //     const newPlant = new plant({ name, category,description, price });
    //     await newPlant.save();

    //     res.status(201).json(newPlant);
    // } catch (error) {
    //     res.status(400).json({ message: 'Error adding plant' });
    // }
};


export const updatePlant = async (req, res) =>{
    try{
        const update = await plant.findByIdAndUpdates(req.params._id, req.body,{new:true})
          
         res.json(update);
    }catch(error){
        res.status(400).json({message:"error in finding the id "})
    }
}


export const deletePlant = async (req, res)=>{
    try{
       await plant.findByIdAndDelete(req.params.id);
res.json({message: 'item deleted'})
    }catch(error){
         res.status(400).json({message:"error to delete the plant"})
    }
}




