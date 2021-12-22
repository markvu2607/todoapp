import { configureStore } from '@reduxjs/toolkit'
import todoListSlice from '../components/TodoList/todoListSlice'
import filtersSlice from '../components/Filters/filterSlice'

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoListSlice.reducer
  }
})

export default store

