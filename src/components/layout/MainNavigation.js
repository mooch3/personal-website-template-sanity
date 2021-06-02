import Logo from './logo/Logo';
import classes from './MainNavigation.module.css';
import MenuToggler from './MenuToggler/MenuToggler';
import SideDrawer from './SideDrawer/SideDrawer';
import TopMenu from './TopMenu/TopMenu';

const MainNavigation = (props) => {

    return (
        <header className={classes.header}>
            <MenuToggler openNav={props.openNav} />
            <Logo />
            <TopMenu />
            <SideDrawer
                open={props.open}
            />
        </header>
    )
}

export default MainNavigation;