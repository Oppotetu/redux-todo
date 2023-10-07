// import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import { Typography } from '@mui/material'

function App() {
	// const [count, setCount] = useState(0)

	return (
		<>
			<div className="App container mx-auto p-6">
				<Typography variant="h1" gutterBottom className="text-center">
					Todos
				</Typography>
				<AddTodo />
				<Todos />
			</div>
		</>
	)
}

// <button onClick={() => setCount((count) => count + 1)}>
// 	count is {count}
// </button>

export default App
