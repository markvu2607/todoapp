import Todo from "../Todo/Todo"
import styles from './TodoList.module.scss'
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { todoListRemainingSelector } from "../../redux/selectors"
import todoListSlice from "./todoListSlice"
import { v4 as uuidv4 } from 'uuid'

const TodoList = () => {
  const dispatch = useDispatch()

  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')

  const todoListRemaining = useSelector(todoListRemainingSelector)

  const handleAddTodo = () => {
    dispatch(todoListSlice.actions.addTodo({
      id: uuidv4(),
      name: todoName,
      priority: priority,
      isCompleted: false
    }))
    setTodoName('')
    setPriority('Medium')
  }

  const handleDeleteTodo = (id) => {
    dispatch(todoListSlice.actions.deleteTodo(id))
  }

  const handleChangeInput = (e) => {
    setTodoName(e.target.value)
  }

  const handleChangePriority = (e) => {
    setPriority(e.target.value)
  }

  const handleToggleCompleteTodo = (id) => {
    dispatch(todoListSlice.actions.toggleCompleteTodo(id))
  }

  return (
    <div className={styles.main}>
      <div className={styles.todoList}>
        {todoListRemaining.map(todoItem => (
          <Todo
            key={todoItem.id}
            data={todoItem}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleCompleteTodo={handleToggleCompleteTodo}
          ></Todo>
        ))}
      </div>
      <div className={styles.form}>
        <input className={styles.textInput} type="text" value={todoName} onChange={handleChangeInput} />
        <select className={styles.priority} value={priority} onChange={handleChangePriority}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button className={styles.btnSubmit} onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  )
}

export default TodoList