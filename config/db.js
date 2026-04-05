import mongoose from "mongoose"

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser:true, 
            useUnifiedTopology:true
        });
        console.log('MongoDb connected sucesfully');

    }catch(error){
  console.error('mongodb not connected', error);
  process.exit(1)
    }
}

export default connectDB;