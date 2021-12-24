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
            <input className={styles.inputStatus} type="radio" id='all' value={'All'} name='status' />
            <label className={styles.label} htmlFor='all'>All</label>
          </div>
          <div>
            <input className={styles.inputStatus} type="radio" id='completed' value={'Completed'} name='status' />
            <label className={styles.label} htmlFor='completed'>Completed</label>
          </div>
          <div>
            <input className={styles.inputStatus} type="radio" id='todo' value={'To do'} name='status' />
            <label className={styles.label} htmlFor='todo'>To do</label>
          </div>
        </div>
      </div>
      <div className={styles.filterBlock}>
        <h4 className={styles.heading}>Filter By Priorities</h4>
        <div className={styles.content}>
          <select className={styles.inputPriorities}>
            <option value="">-- Please select --</option>
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