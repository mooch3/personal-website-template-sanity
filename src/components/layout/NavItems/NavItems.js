import { NavLink } from 'react-router-dom';
import classes from './NavItems.module.css';

const NavItems = () => {
    return (
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to="/" exact>home.</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/about">about.</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/publications">publications.</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="inner-healing">inner healing.</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to="/contact">contact.</NavLink>
                </li>
            </ul>

    )
}

export default NavItems;