import { app } from './app.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server is running on port: ${process.env.PORT || 4000}`);
    })
})
.catch((error) => {
    console.log(`MongoDb connection failed: ${error}`);
})