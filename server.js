import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './src/routes/api.js';

dotenv.config();

// create App Object
const app = express();

// connect to MongoDB
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true, useUnifiedTopology: true,
});

// Fix cors error
app.use(cors());

// use routes file
app.use('/api', express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 8000;

// run the server
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
