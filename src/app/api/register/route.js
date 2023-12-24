import { NextResponse } from "next/server";


export async function POST(req) {

    try {
        const cokhenarma = await req.json();
        console.log(cokhenarma);
        return NextResponse.json({ message: 'user reqistered' })
    } catch (error) {
        return NextResponse.json(
            { message: 'an error ' }
        )
    }
}