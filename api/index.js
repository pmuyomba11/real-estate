import express from 'express'
const app = express();
import colors from 'colors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';
dotenv.config()


mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection;

db.on('connected', () => console.log('DATABASE is connected...'))
db.on('disconnected', () => console.log('DB is disconnected'))
db.on('error', (err) => console.log(err.message + ' is DATABASE configured correctly?'))

//Routes...
app.use('/api/v1', userRouter)


app.listen(3000, () => {
    console.log('Server is running on PORT 3000...'.inverse.bold.blue);
})


