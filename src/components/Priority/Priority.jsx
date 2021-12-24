import clsx from 'clsx'
import styles from './Priority.module.scss'

const color = {
  'High': 'Red',
  'Medium': 'Blue',
  'Low': 'Gray'
}

const Priority = ({ text }) => {

  return (
    <div className={clsx(styles.main, styles[color[text]])}>
      {text}
    </div>
  )

}

export default Priority