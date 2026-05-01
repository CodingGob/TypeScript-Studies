import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <br />

      <Link to='/about'>About us</Link>
    </div>
  )
}