import { prisma } from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function POST(request: NextRequest) {

    try {

        await prisma.todo.deleteMany()

        await prisma.todo.createMany({
            data: [
                { description: "Hacer queaceres" },
                { description: "Lavar trastes" },
                { description: "Comer chocolate" },
                { description: "Hacer ejercicio" },
                { description: "Dormir", complete: true }
            ]
        })

        return NextResponse.json({

            message: "Seed executed"
        })

    } catch (error) {

        console.log(error)

        return NextResponse.json({

            message: "Internal server error"
        }, { status: 500 })
    }
}