import { NavLink } from 'react-router-dom';
import classes from './NavItems.module.css';

const NavItems = (props) => {

    return (
 
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink activeClassName={classes.active} to="/" exact>Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={classes.active} to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={classes.active} to="/publications">Publications</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={classes.active} to="inner-healing">Inner Healing</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={classes.active} to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
    )
}

export default NavItems;