import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export interface Todo {
	id: string
	text: string
}
export interface TodoState {
	todos: Todo[]
}
const initialState: TodoState = {
	todos: [],
}

// interface TodoState {
// 	todos: string[]
// }

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			const todo = {
				id: nanoid(),
				text: action.payload,
			}
			state.todos.push(todo)
		},
		removeTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload)
		},
	},
})

export const { addTodo, removeTodo } = todoSlice.actions

export const selectTodos = (state: RootState) => state.todos

export default todoSlice.reducer
