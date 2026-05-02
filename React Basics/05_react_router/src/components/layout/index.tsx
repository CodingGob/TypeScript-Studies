import { Outlet } from 'react-router-dom'
import { Header } from '../header'

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <footer>
        <br />
        <hr />
        <p>Copyright CodingGob&copy; 2026</p>
      </footer>
    </>
  )
}