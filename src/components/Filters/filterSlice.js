import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {},
  reducers: {
    addTodo: (state, action) => {
      return state
    }
  }
})

export default filtersSlice