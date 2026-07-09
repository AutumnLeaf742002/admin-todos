"use client"

import { useRouter } from "next/navigation"

import { Todo } from "../../../generated/prisma/client"

import { toggleTodo } from "@/todos/actions"

import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5"

interface Props {
    todo: Todo
}

export const TodoItem = ({ todo }: Props) => {

    const router = useRouter()

    const onToggleTodo = async () => {

        await toggleTodo(todo.id, !todo.complete)
        router.refresh()

    }

    return (
        <div className={`${todo.complete ? "bg-green-50 border-green-500" : "bg-blue-50 border-blue-500"} p-2 flex gap-2 rounded border shadow-sm transition`}>

            <div onClick={onToggleTodo} className="cursor-pointer">
                {
                    todo.complete ? (<IoCheckboxOutline size={26} />) : (<IoSquareOutline size={26} />)
                }
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full">
                <span className={`font-semibold ${todo.complete && "line-through"} flex`}>
                    {todo.description}
                </span>
                <span className="text-neutral-500">
                    {todo.createdAt.toDateString()}
                </span>
            </div>
        </div>

    )
}