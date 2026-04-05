import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import plantRoutes from './routes/plantroutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import OrderRoutes from './routes/orderroutes.js';
import userAccount from './routes/userroutes.js';
import wishlist from './routes/wishlist.js'
import cart from './routes/cartroutes.js';
import bookingServices from './routes/serviceroutes.js';
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());


connectDB();


app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use('/api/plants', plantRoutes);
app.use('/api/order', OrderRoutes);
app.use('/api/useraccount', userAccount);
app.use('/api/wishlist',wishlist);
app.use('/api/cart', cart)
app.use('/api/service', bookingServices)

const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
