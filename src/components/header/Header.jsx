import { NavLink } from 'react-router-dom';
import './Header.css'

function Header(){
    return(
        <header className="container">
            <div className='logo'>
                LOGO
            </div>

            <nav className='navegation'>
                <ul>
                    <NavLink 
                    className={ ( {isActive} ) => isActive ? "active" : "" }
                    to={'/'}>
                        Home
                    </NavLink>
                    <NavLink to={'/contato'}>Contato</NavLink>
                    <NavLink to={'/sobre'}>Sobre</NavLink>
                    <NavLink to={'/pessoas'}>Pessoas</NavLink>
                    <NavLink to={'/cadastrar'}>Cadastrar</NavLink>
                    <NavLink to={'/produtos'}> Produtos </NavLink>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header;