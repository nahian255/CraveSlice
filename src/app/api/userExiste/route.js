import User from '../../../models/user'
import { NextResponse } from "next/server";

export async function POST(res) {
    try {
        const { email } = await res.json();
        const user = await User.findOne({ email }).select("_id");
        console.log("user: ", user);
        return NextResponse.json({ user });
    } catch (error) {
        console.log(error);
    }
}