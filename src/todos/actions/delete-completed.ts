"use server"

import { updateTag } from "next/cache";

import { prisma } from "@/lib/prisma";

export const deleteCompleted = async (): Promise<void> => {

    const totalTodos = await prisma.todo.count({
        where: { complete: true }
    })

    if (totalTodos === 0) {
        
        throw new Error("No hay tareas para eliminar")
    }

    await prisma.todo.deleteMany({
        where: { complete: true }
    })

    updateTag("todos")
}