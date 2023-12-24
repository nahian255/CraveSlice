import { NextResponse } from "next/server";
import { connectMongoDB } from '../../../lib/mongos'
import User from '../../../models/user'


export async function POST(req) {

    try {
        const { name, email, password } = await req.json();

        console.log(name, email, password);
        await connectMongoDB();
        await User.create({ name, email, password })

        return NextResponse.json({ message: 'user reqistered' })
    } catch (error) {
        return NextResponse.json(
            { message: 'an error ' }
        )
    }
};