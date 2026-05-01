import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div>
      <h1>404 Page not found</h1>
      <br />

      <Link to='/'>Back to HomePage</Link><br />
    </div>
  )
}