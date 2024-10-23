import { Link, Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
        <nav>
          <ul>
          <li><Link to="/" >Home</Link></li>
            <li><Link to="/characters" >Characters</Link></li>
            <li><Link to="/episodes" >Episodes</Link></li>
          </ul>
        </nav>
        <Outlet />
        <footer>
        <p>&copy; 2023 Rick & Morty Fan App</p>
        </footer>
    </>
  )
}

export default Layout