"use server"

import { updateTag } from "next/cache";

import { prisma } from "@/lib/prisma";
import { Todo } from "../../../generated/prisma/client";

export const createTodo = async (description: string): Promise<Todo> => {

    if (!description) {
        throw new Error("No se puede crear una tarea sin descripción")
    }

    const newTodo = await prisma.todo.create({
        data: {
            description
        }
    })

    updateTag("todos")

    return newTodo
}