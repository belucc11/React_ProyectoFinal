import CartWidget from '../CartWidget/CartWidget'
import {Link, NavLink} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <Link to= "/">
        <img src="../img/logo.png" className='imgLogo' alt="Logo" />
        </Link>
        
        <nav>
            <ul>
                <li>
                <NavLink className="navBtn" to= "/categoria/1"> Princesas </NavLink>
                </li>

                <li>
                <NavLink className="navBtn" to= "/categoria/2"> Superhéroes </NavLink> 
                </li>

            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar