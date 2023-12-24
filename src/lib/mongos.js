import mongoose from "mongoose"

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_url)
        console.log('Mongodb connected');
    } catch (error) {
        console.log('error', error);
    }
}