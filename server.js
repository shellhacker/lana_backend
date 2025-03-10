import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/DB.js';
import userRoutes from './routes/user.js';
dotenv.config();
const app = express();
connectDB()
app.use(express.json());
app.use('/user', userRoutes);
app.get('/', (req, res) => {
    res.send('API is running');
})


app.listen(60068, () => {

    console.log(`Server is running on port------------------------- `);
    console.log(`Started------------------------- `);

    console.log(`Server is running on port------------------------- `);

})