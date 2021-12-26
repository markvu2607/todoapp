import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    searchText: '',
    status: 'All',
    priority: ''
  },
  reducers: {
    changeSearchText: (state, action) => {
      state.searchText = action.payload
    },
    changeStatus: (state, action) => {
      state.status = action.payload
    },
    changePriority: (state, action) => {
      state.priority = action.payload
    }
  }
})

export default filtersSlice