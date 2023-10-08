import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import { selectTodos } from '../features/todo/todoSlice'
import { Button, List, ListItem, ListItemText } from '@mui/material'

function Todos() {
	const todos = useSelector(selectTodos)

	const dispatch = useDispatch()

	return (
		<>
			<List className="space-y-2">
				{todos.map((todo) => (
					<ListItem className="border-2 rounded">
						<ListItemText primary={todo.text} />
						<Button
							variant="contained"
							color="error"
							onClick={() => dispatch(removeTodo(todo.id))}
						>
							Delete
						</Button>
					</ListItem>
				))}
			</List>
		</>
	)
}

export default Todos
