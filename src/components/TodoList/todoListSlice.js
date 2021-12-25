import { createSlice } from '@reduxjs/toolkit'

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    deleteTodo: (state, action) => {
      state.splice(state.findIndex(todo => todo.id === action.payload), 1)
    },
    toggleCompleteTodo: (state, action) => {
      const id = state.findIndex(todo => todo.id === action.payload)
      state[id].isCompleted = !state[id].isCompleted
    },
  },
})

export default todoListSlice