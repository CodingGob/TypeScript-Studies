import styles from './notFound.module.css'
import { Link } from 'react-router-dom'

export function NotFound() {

  return (
    <div className={styles.container}>
      <h1>Error 404</h1>
      <p>Page Not Found</p>

      <Link to='/'>Back to the Main Page</Link>
    </div>
  )
}

export default NotFound