import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
	const [input, setInput] = useState('')
	const dispatch = useDispatch()

	const addTodoHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (input == '') {
			console.log('cannot save empty')
			return
		}
		dispatch(addTodo(input))

		setInput('')
	}
	return (
		<>
			<form onSubmit={addTodoHandler} className="space-x-3 w-max p-6 mx-auto">
				<input
					type="text"
					value={input}
					onChange={(event) => setInput(event.target.value)}
					className="bg-gray-800 rounded border border-gray-700"
				/>
				<button
					type="submit"
					className="text-white bg-indigo-500 border-0 py-2 px-6"
				>
					Add todo
				</button>
			</form>
		</>
	)
}

export default AddTodo
