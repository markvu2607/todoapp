import { useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Priority from '../Priority/Priority'
import styles from './Todo.module.scss'
import clsx from 'clsx'


const Todo = ({ data, handleDeleteTodo, handleToggleCompleteTodo }) => {

  const [todo, setTodo] = useState({})

  const checkboxRef = useRef()

  useEffect(() => {
    setTodo(data)
  }, [data])

  useEffect(() => {
    checkboxRef.current.checked = todo.isCompleted
  }, [todo.isCompleted])

  return (
    <div className={clsx(styles.main, todo.isCompleted && styles.lineThrough)}>
      <input className={styles.checkbox} type="checkbox" ref={checkboxRef} onChange={() => { handleToggleCompleteTodo(todo.id) }} />
      <span className={styles.content}>{todo.name}</span>
      <Priority className={styles.priority} text={todo.priority}></Priority>
      <FontAwesomeIcon className={styles.iconTrash} icon={faTrash} onClick={() => handleDeleteTodo(todo.id)}></FontAwesomeIcon>
    </div>
  )
}

export default Todo