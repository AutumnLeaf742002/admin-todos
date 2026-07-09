import { Todo } from '../../../generated/prisma/browser';

import { TodoItem } from './TodoItem';

interface Props {
    todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: Props) => {

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    todos.map(i => (
                        <TodoItem key={i.id} todo={i} />
                    ))
                }
            </div>

            {
                todos.length === 0 && (<div className="text-gray-500 text-center">No hay tareas para mostrar</div>)
            }

        </>
    )
}