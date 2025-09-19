import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRouter from './router/auth.router.js'
import userRouter from './router/user.router.js'
import cookieParser from 'cookie-parser'
import bookingRoutes from './router/bookingRoutes.js';
import paymentRoutes from './router/paymentRoutes.js';
import sessionRoutes from './router/sessionRoutes.js';
import mentorRoutes from './router/mentor.router.js';
import userRoutes from './router/user.router.js';



dotenv.config()
const app = new express();
app.use(cookieParser())
app.use(cors({
    origin:'https://mentor.project.artifyr.in',
    credentials:true
}))

app.use(express.json())
const PORT = process.env.PORT || 5000
connectDB();

//custom routers
app.use('/api/auth', authRouter)

app.use('/api/booking',bookingRoutes)

app.use('/api/payment',paymentRoutes)

app.use('/api/session',sessionRoutes)

app.use('/api/user',userRoutes)

app.use('/api/profile',mentorRoutes)



app.get('/', (req, res)=>{
    res.send("API is running...");
});

app.listen(PORT, ()=>{
console.log(`Server is running on port : ${PORT}`)
});
