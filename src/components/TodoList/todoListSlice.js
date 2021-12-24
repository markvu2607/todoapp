import { createSlice } from '@reduxjs/toolkit'

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [
    { name: 'Hoc Redux', priority: 'High', isCompleted: true },
    { name: 'Thuc hanh ReactJS', priority: 'Medium', isCompleted: false },
    { name: 'Tap the duc 2', priority: 'Low', isCompleted: true },
    { name: 'Test', priority: 'High', isCompleted: true },
    { name: 'Test 2', priority: 'Low', isCompleted: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      return state
    }
  }
})

export default todoListSlice