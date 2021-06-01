import { useState } from 'react'

import Backdrop from "../ui/Backdrop/Backdrop"
import Footer from "./Footer"
import MainNavigation from "./MainNavigation"

const Layout = (props) => {
    const [toggleNav, setToggleNav] = useState(false)

    const navHandler = () => {
        setToggleNav(prevValue => !prevValue);
    }
    return (
        <>
            <MainNavigation
                openNav={navHandler}
                open={toggleNav}
            />
            <main>
                {props.children}
                <Backdrop show={toggleNav} clicked={navHandler}/>
            </main>
            <Footer />
        </>
    )
}

export default Layout;