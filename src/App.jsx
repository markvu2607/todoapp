import styles from './App.module.scss'
import TodoList from './components/TodoList/TodoList'
import Filters from './components/Filters/Filters'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <div className={styles.heading}>Todo App</div>
        <Filters></Filters>
        <TodoList></TodoList>
      </div>
    </div>
  )
}

export default App
