import { configureStore } from '@reduxjs/toolkit'
import todosSlice from '../components/TodoList/todosSlice'
import filtersSlice from '../components/Filters/filterSlice'

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todosSlice.reducer
  }
})

export default store

