import Todo from "../Todo/Todo"
import styles from './TodoList.module.scss'
import { useSelector } from "react-redux"
import { todoListSelector } from "../../redux/selectors"

const TodoList = () => {

  const todoList = useSelector(todoListSelector)

  return (
    <div className={styles.main}>
      <div className={styles.todoList}>
        {todoList.map((todo, index) => (
          <Todo key={index} name={todo.name} priority={todo.priority} isCompleted={todo.isCompleted}></Todo>
        ))}
      </div>
      <div className={styles.form}>
        <input className={styles.textInput} type="text" />
        <select className={styles.priority} name="" id="" value="Medium">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button className={styles.btnSubmit}>Add</button>
      </div>
    </div>
  )
}

export default TodoList