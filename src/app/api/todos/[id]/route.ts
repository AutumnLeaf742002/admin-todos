import { prisma } from '@/lib/prisma'
import { updateTodoSchema } from '@/yup'
import { NextResponse, NextRequest } from 'next/server'

// get todo
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {

    const { id } = await params

    const todo = await prisma.todo.findUnique({
        where: { id }
    })

    if (!todo) {

        return NextResponse.json({

            message: "This todo does not exist"
        }, { status: 404 })
    }

    return NextResponse.json(todo)
}

// update todo
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {

    const { id } = await params

    try {

        // validate body
        const { description, complete } = await updateTodoSchema.validate(await request.json())

        try {

            // check if current todo is in the db
            const prevTodo = await prisma.todo.findUnique({
                where: { id }
            })

            if (!prevTodo) {

                return NextResponse.json({
                    message: "This todo does not exist"
                }, { status: 404 })
            }

            // update todo
            const updatedTodo = await prisma.todo.update({

                where: { id },
                data: { description, complete }
            })

            return NextResponse.json(updatedTodo, { status: 200 })

        } catch (error) {

            console.log(error)

            return NextResponse.json({
                message: "Internal server error"
            }, { status: 500 })
        }

    } catch (error) {

        return NextResponse.json({
            message: error
        }, { status: 400 })
    }
}