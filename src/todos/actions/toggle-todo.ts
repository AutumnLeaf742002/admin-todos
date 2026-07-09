"use server"

import { updateTag } from "next/cache"

import { Todo } from "../../../generated/prisma/client"
import { prisma } from "@/lib/prisma"

export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {

    const todo = await prisma.todo.update({
        where: { id },
        data: { complete }
    })

    updateTag("todos")

    return todo
}