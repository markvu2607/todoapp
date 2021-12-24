import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    searchText: '',
    status: 'All',
    priority: ''
  },
  reducers: {
    addTodo: (state, action) => {
      return state
    }
  }
})

export default filtersSlice