import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <Link to= "/">
        <h1>Kits Imprimibles</h1>
        </Link>
        
        <nav>
            <ul>
                <li>
                <NavLink to= "/categoria/1"> Nenas </NavLink>
                </li>

                <li>
                <NavLink to= "/categoria/2"> Nenes </NavLink> 
                </li>

            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar