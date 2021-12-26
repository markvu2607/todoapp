import { createSlice } from '@reduxjs/toolkit'


const todoListSlice = createSlice({
  name: 'todoList',
  initialState: JSON.parse(localStorage.getItem('todoList')) || [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
      localStorage.setItem('todoList', JSON.stringify(state))
    },
    deleteTodo: (state, action) => {
      state.splice(state.findIndex(todo => todo.id === action.payload), 1)
      localStorage.setItem('todoList', JSON.stringify(state))
    },
    toggleCompleteTodo: (state, action) => {
      const id = state.findIndex(todo => todo.id === action.payload)
      state[id].isCompleted = !state[id].isCompleted
      localStorage.setItem('todoList', JSON.stringify(state))
    },
  },
})

export default todoListSlice