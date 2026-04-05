import mongoose from "mongoose";

const userAccount = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
   password:{type:String},
            
},
{
    timestamps:true
});
const Signup = mongoose.model('Accounts', userAccount);

 export default Signup;