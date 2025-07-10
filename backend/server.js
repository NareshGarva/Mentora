import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()
const app = new express();
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000

connectDB();

app.get('/', (req, res)=>{
    res.send("API is running...");
});

app.listen(PORT, ()=>{
console.log(`Server is running on port : ${PORT}`)
});