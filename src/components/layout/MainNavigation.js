import { NavLink } from 'react-router-dom';

import Logo from './logo/Logo';
import classes from './MainNavigation.module.css';


const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <Logo />
            <nav className={classes.nav}>
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
            </nav>
        </header>
    )
}

export default MainNavigation;