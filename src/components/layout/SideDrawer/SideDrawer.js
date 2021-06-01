import classes from './SideDrawer.module.css';
import NavItems from '../NavItems/NavItems';


const SideDrawer = (props) => {
    let attachedClasses = [classes['side-drawer'], classes.Closed];

    if (props.open) {
        attachedClasses = [classes['side-drawer'], classes.Open]
    }


    return (
        <>
            <div className={attachedClasses.join(' ')}>
                <h1>Kevin Smith</h1>
                <hr></hr>
                <nav className={classes.nav}>
                    <NavItems />
                </nav>
            </div>
        </>
    )
}

export default SideDrawer