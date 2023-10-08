import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import { Button, OutlinedInput } from '@mui/material'

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
				<OutlinedInput
					type="text"
					value={input}
					onChange={(event) => setInput(event.target.value)}
					// className="bg-gray-500"
				/>
				<Button type="submit" variant="contained">
					Add Todo
				</Button>
			</form>
		</>
	)
}

export default AddTodo
