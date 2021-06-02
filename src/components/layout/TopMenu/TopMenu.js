import NavItems from '../NavItems/NavItems';
import classes from './TopMenu.module.css'

const TopMenu = () => {
    return (
        <div className={classes['top-menu']}>
            <NavItems />
        </div>
    )
}

export default TopMenu;