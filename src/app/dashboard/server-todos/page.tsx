import { prisma } from '@/lib/prisma'

import { Metadata } from 'next';

import { getTodos } from '@/todos/helpers';

import { NewTodo, TodosGrid } from '@/todos/components';

export const metadata: Metadata = {
    title: "Server Todos"
}

export default async function ServerTodos() {

    const todos = await getTodos()

    return (
        <div>
            <h1 className="text-xl font-semibold text-center w-full border-b-2 border-gray-300 mb-4">Lista de Tareas Server actions</h1>

            <div className='flex flex-col gap-4'>
                <NewTodo />
                <TodosGrid todos={todos} />
            </div>
        </div>
    );
}