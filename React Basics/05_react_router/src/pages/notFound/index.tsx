import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div>
      <h1>404 Page not found</h1>


      <Link to='/'>Back to Home Page</Link><br />
    </div>
  )
}