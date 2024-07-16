import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {

    let img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQShZC-aRMjhBjWR8HqOAZPXCyMDC7ueGE2pg&s"
    return (
        <nav className='navbar'>
            <img src={img} alt="logo" />
            <ul className="nav-links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/produtos'>Produtos</Link></li>
                <li><Link to='/contatos'>Contatos</Link></li>   
            </ul>
        </nav>
    )
} 

export default NavBar