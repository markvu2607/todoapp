import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      return state
    }
  }
})

export default todosSlice