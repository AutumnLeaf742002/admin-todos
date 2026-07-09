import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

    try {

        const todos = await prisma.todo.findMany()

        return NextResponse.json({
        method: "GET",
        response: todos
    })
    } catch (error) {

        return NextResponse.json({
            message: "Something went wrong"
        })
    }

    
}