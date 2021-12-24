import { useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Priority from '../Priority/Priority'
import styles from './Todo.module.scss'
import clsx from 'clsx'


const Todo = ({ name, priority, isCompleted }) => {

  const [todo, setTodo] = useState({ name, priority, isCompleted })

  const checkboxRef = useRef()

  useEffect(() => {
    checkboxRef.current.checked = todo.isCompleted
  })

  const handleChangeCompleted = () => {
    setTodo({
      ...todo,
      isCompleted: !todo.isCompleted
    })
  }

  return (
    <div className={clsx(styles.main, todo.isCompleted && styles.lineThrough)}>
      <input className={styles.checkbox} type="checkbox" ref={checkboxRef} onChange={handleChangeCompleted} />
      <span className={styles.content}>{todo.name}</span>
      <Priority className={styles.priority} text={todo.priority}></Priority>
      <FontAwesomeIcon className={styles.iconTrash} icon={faTrash}></FontAwesomeIcon>
    </div>
  )
}

export default Todo