import mongoose, { model } from "mongoose";

const loginUser = new mongoose.Schema({
    
    email:{type:String},
   password:{type:String},
            
},
{
    timestamps:true
});
const Login = mongoose.model('login', loginUser);

 export default Login;