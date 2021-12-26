import styles from './Filters.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import filtersSlice from './filterSlice'

const Filters = () => {
  const dispatch = useDispatch()

  const [searchText, setSearchText] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [filterPriority, setFilterPriority] = useState('')

  const handleChangeText = (e) => {
    setSearchText(e.target.value)
    dispatch(filtersSlice.actions.changeSearchText(e.target.value))
  }

  const handleChangeStatus = (e) => {
    setFilterStatus(e.target.value)
    dispatch(filtersSlice.actions.changeStatus(e.target.value))
  }

  const handleChangePriority = (e) => {
    setFilterPriority(e.target.value)
    dispatch(filtersSlice.actions.changePriority(e.target.value))
  }

  return (
    <div className={styles.main}>
      <div className={styles.filterBlock}>
        <h4 className={styles.heading}>Search</h4>
        <div className={styles.content}>
          <input className={styles.inputSearch} type="text" value={searchText} onChange={handleChangeText} placeholder='Input search text' />
          <button className={styles.btnSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <div className={styles.filterBlock}>
        <h4 className={styles.heading}>Filter By Status</h4>
        <div className={styles.content}>
          <div>
            <input className={styles.inputStatus} type="radio" id='all' value={'All'} checked={filterStatus === 'All'} onChange={handleChangeStatus} />
            <label className={styles.label} htmlFor='all'>All</label>
          </div>
          <div>
            <input className={styles.inputStatus} type="radio" id='completed' value={'Completed'} checked={filterStatus === 'Completed'} onChange={handleChangeStatus} />
            <label className={styles.label} htmlFor='completed'>Completed</label>
          </div>
          <div>
            <input className={styles.inputStatus} type="radio" id='todo' value={'To do'} checked={filterStatus === 'To do'} onChange={handleChangeStatus} />
            <label className={styles.label} htmlFor='todo'>To do</label>
          </div>
        </div>
      </div>
      <div className={styles.filterBlock}>
        <h4 className={styles.heading}>Filter By Priorities</h4>
        <div className={styles.content}>
          <select className={styles.inputPriorities} value={filterPriority} onChange={handleChangePriority}>
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