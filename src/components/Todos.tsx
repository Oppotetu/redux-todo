import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import { selectTodos } from '../features/todo/todoSlice'

function Todos() {
	const todos = useSelector(selectTodos)

	const dispatch = useDispatch()

	return (
		<>
			<h3>Todos</h3>
			<ul className="list-none">
				{todos.map((todo) => (
					<li
						key={todo.id}
						className="mt-4 flex justify-between items-center px-4 py-2 rounded"
					>
						<div className="bg-white-500">{todo.text}</div>
						<button
							onClick={() => dispatch(removeTodo(todo.id))}
							className="bg-red-500 border-0 py-1 px-4 rounded"
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	)
}

export default Todos
