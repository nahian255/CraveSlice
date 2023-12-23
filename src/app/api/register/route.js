import { User } from "../../models/user"
import mongoose from "mongoose"

export async function POST(req) {
    const body = await req.json();
    mongoose.connect(process.env.Mongo_url)
    const createdUser = await User.create(body)
    return Response.json(createdUser)
}