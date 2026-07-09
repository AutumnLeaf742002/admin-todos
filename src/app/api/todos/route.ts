import { prisma } from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import { createTodoSchema } from '@/yup'

export async function GET(request: NextRequest) {

    const { searchParams } = new URL(request.url)

    const take = Number(searchParams.get("take") ?? "10")
    const skip = Number(searchParams.get("skip") ?? "0")

    if (isNaN(take)) {

        return NextResponse.json({

            message: "take parameter should be a number"

        }, { status: 400 })
    }

    if (isNaN(skip)) {

        return NextResponse.json({

            message: "skip parameter should be a number"

        }, { status: 400 })
    }

    try {

        const todos = await prisma.todo.findMany({

            take,
            skip
        })

        return NextResponse.json({

            todos
        })

    } catch (error) {

        console.log(error)

        return NextResponse.json({
            message: "Something went wrong"
        })
    }


}


export async function POST(request: NextRequest) {


    // validate yup
    try {

        const { complete, description } = await createTodoSchema.validate(await request.json())

        // validate prisma
        try {
            const todo = await prisma.todo.create({ data: { description, complete } })

            return NextResponse.json(todo, { status: 201 })
        }
        catch (error) {
            console.log(error)

            return NextResponse.json({
                message: "Internal server error"
            }, { status: 500 })
        }
    }
    catch (error) {

        return NextResponse.json(error, { status: 400 })
    }
}