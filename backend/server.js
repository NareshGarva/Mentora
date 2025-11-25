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

app.use(express.json())

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}))

const PORT = process.env.PORT || 5000
connectDB();

// Add request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - Origin: ${req.headers.origin}`);
    next();
});

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

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, ()=>{
    console.log(`Server is running on ${HOST}:${PORT}`)
});