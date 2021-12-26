import { createSelector } from "@reduxjs/toolkit"

export const todoListSelector = state => state.todoList
export const filtersSelector = state => state.filters

export const todoListRemainingSelector = createSelector(
  todoListSelector,
  filtersSelector,
  (todoList, filters) => {
    let todoListRemaining = todoList.filter((todo) => todo.name.includes(filters.searchText))
    if (filters.status !== 'All') {
      if (filters.status === 'Completed') {
        todoListRemaining = todoListRemaining.filter(todo => todo.isCompleted === true)
      } else {
        todoListRemaining = todoListRemaining.filter(todo => todo.isCompleted === false)
      }
    }
    todoListRemaining = todoListRemaining.filter(todo => todo.priority.includes(filters.priority))
    return todoListRemaining
  }
)