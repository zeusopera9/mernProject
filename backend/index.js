import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';


dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// Database Connection
mongoose.set('strictQuery', false);
const connect = async()=> {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('MongoDB Database Connected');
    } catch (err) {
        console.log('MongoDB Database connection failed', err);
    }
}

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.listen(port, () => {
    connect();
    console.log('Server is listening on port', port);
})