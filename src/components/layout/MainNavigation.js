import Logo from './logo/Logo';
import classes from './MainNavigation.module.css';
import MenuToggler from './MenuToggler/MenuToggler';
import SideDrawer from './SideDrawer/SideDrawer';
import NavItems from './NavItems/NavItems';

const MainNavigation = (props) => {

    return (
        <header className={classes.header}>
            <MenuToggler openNav={props.openNav} />
            <Logo />
            <nav className={classes.nav}>
                <NavItems />
            </nav>
            <SideDrawer
            open={props.open}
            />
        </header>
    )
}

export default MainNavigation;