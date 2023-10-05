import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div className="App container mx-auto p-6">
				<h3 className="text-center p-6 text-2xl">Todos</h3>
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
