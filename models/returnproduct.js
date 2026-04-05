import mongoose from "mongoose";
import Plant from "./plant";

const returnSchema = new mongoose.Schema({
     Plant:{
        type:mongoose.Schema.Types.ObjectId,
         ref:'plant',
         required:true
     },
     username:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Account',
         required:true
     }
     

})