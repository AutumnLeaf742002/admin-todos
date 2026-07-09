'use client';

import { useState } from "react";

import { createTodo, deleteCompleted } from "../actions";

import { IoTrashOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

export const NewTodo = () => {

    const [description, setDescription] = useState<string>("");

    const router = useRouter()

    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {

        e.preventDefault()

        try {

            await createTodo(description.trim())
            setDescription("")
            router.refresh()

        } catch (error) {

            if (error instanceof Error) {
                alert(error.message)
            }
            else {
                alert("Error desconocido al crear la tarea")
            }
        }
    }

    const onDeleteCompleted = async () => {

        try {

            await deleteCompleted()
            router.refresh()

        } catch (error) {

            if (error instanceof Error) {
                alert(error.message)
            }
            else {
                alert("Error desconocido al eliminar tareas completadas")
            }
        }
    }

    return (
        <form className='flex w-full' onSubmit={onSubmit}>
            <input type="text"
                className="w-1/2 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
                placeholder="¿Qué necesita ser hecho?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
                Crear
            </button>

            <span className="flex flex-1"></span>

            <button
                onClick={onDeleteCompleted}
                type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all text-nowrap hover:cursor-pointer">
                <IoTrashOutline />
                Eliminar completados
            </button>


        </form>
    )
}