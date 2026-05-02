import { Link } from 'react-router-dom'
import './header.css'

export function Header() {
  return (
    <header className='header'>
      <Link to='/'>Home</Link><br />
      <Link to='/about'>About us</Link>
    </header>
  )
}