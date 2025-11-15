import mongoose from "mongoose";

export default async function connectDB() {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\nConnected to Mongodb: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`Mongodb connection error: `, error.message);
        process.exit(1)
    }
}