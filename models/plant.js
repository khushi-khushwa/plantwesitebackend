import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema({
   category: String,
  name: String,
  image: String,
  price: Number,
  fakePrice: Number,
  shippingCharges: Number,
  dispatch: String,
  origin: String,
  description: String,
  details: Object,
  rating: Number,
  totalReviews: Number,
  stock: Number,
  discount: Number
}, { timestamps: true });

  
const Plant = mongoose.model('plant', plantSchema);

export default Plant;


// 592941251223928  api key
//   secret   xjmFE9yJo5od6lE7VOASNf-cl1E
