import { cacheTag } from "next/cache"

import { prisma } from "@/lib/prisma"
import { Todo } from "../../../generated/prisma/client"

export const getTodos = async (): Promise<Todo[]> => {
    "use cache"
    cacheTag("todos")

    const todos = await prisma.todo.findMany({
        orderBy: { createdAt: "asc" }
    })

    return todos;
}