import { createSlice } from '@reduxjs/toolkit'

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      return state
    }
  }
})

export default todoListSlice