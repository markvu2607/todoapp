import styles from './Filters.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Filters = () => {
  return (
    <div className={styles.main}>
      <div className={styles.filterBlock}>
        <h4 className={styles.heading}>Search</h4>
        <div className={styles.content}>
          <input className={styles.inputSearch} type="text" placeholder='Input search text' />
          <button className={styles.btnSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className={styles.filterBlock}>
        <h4 className={styles.heading}>Filter By Status</h4>
        <div className={styles.content}>
          <div>
            <input className={styles.inputStatus} type="radio" value={'All'} name='status' />
            <span>All</span>
          </div>
          <div>
            <input className={styles.inputStatus} type="radio" value={'Completed'} name='status' />
            <span>Completed</span>
          </div>
          <div>
            <input className={styles.inputStatus} type="radio" value={'To do'} name='status' />
            <span>To do</span>
          </div>
        </div>
      </div>
      <div className={styles.filterBlock}>
        <h4 className={styles.heading}>Filter By Priorities</h4>
        <div className={styles.content}>
          <select className={styles.inputPriorities}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filters