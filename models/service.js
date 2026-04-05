import mongoose from "mongoose";

const serviceApply = new mongoose.Schema({
      
    
     charges:{type:String},
          description:{type:String},
    title:{type:String},

     userdata:{
      name:{type:String},
     email:{type:String},
     selectservice:{type:String},
     },



})

   const BookingServices= new mongoose.model("services", serviceApply);
    export default BookingServices;