import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    productId: {
     type:String
    },
    category:        { type: String },
    discount:        { type: Number },
    fakeprice:       { type: Number },
    origin:          { type: String },
    shippingCharges: { type: Number },
    dispatch:        { type: String },
    image:           { type: String },
    quantity:       { type: Number, default: 1 },
    price:          { type: Number },          
    totalpay:       { type: Number },          
    date:           { type: Date },
    user: {
      contactDetail: {
        name:     { type: String },
        email:    { type: String },
        number: { type: String },           
      },

      deliveryDetail: {
        country: { type: String },
        address: { type: String },
        city:    { type: String },
        zipcode: { type: String },
      },

      paymentDetail: {
        paymentMethod: { type: String },     

        CreditDebit: {                       
          cardNumber: { type: String },
          expiryDate: { type: String },
          cvv:        { type: String },
        },

        NetBanking: {
          selectedBank: { type: String },   
        },
      },
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("orders", orderSchema);
export default Order;