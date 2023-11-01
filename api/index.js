import express from 'express'
const app = express();
import colors from 'colors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';



mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection;

db.on('connected', () => console.log('DATABASE is connected...'))
db.on('disconnected', () => console.log('DB is disconnected'))
db.on('error', (err) => console.log(err.message + ' is DATABASE configured correctly?'))

//Middleware...
app.use(express.urlencoded({ extended: true }))

//Routes...
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)


app.listen(3000, () => {
    console.log('Server is running on PORT 3000...'.inverse.bold.blue);
})


