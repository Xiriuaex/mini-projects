

import styles from "@/app/styles/navbar.module.css"
import {CgCloseR, CgMenu} from "react-icons/cg";
import Link from "next/link";

const Nav = ( { openMenu, handleDropdown }) => {
   
    return (
        <nav className={styles.navbar}>
            <div className={styles.desktop}>
                <ul className={styles.navbarList}>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink} href="/"
                              onClick={handleDropdown}
                        >Home</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink} href="/about"
                              onClick={handleDropdown}
                        >About</Link>
                    </li>
                    <li className={styles.navbarItem}>
                        <Link className={styles.navbarLink}
                              onClick={handleDropdown}
                              href="/movies">Movie</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.mobile}>  
                    <CgMenu
                        name="menu-outline"
                        className={openMenu ? "hidden" : "text-[4.2rem] text-[#161617] hover:text-[#e50914]" }
                        onClick={handleDropdown}
                    />
                    <CgCloseR
                        name="close-outline"
                        className={openMenu ? "text-[4.2rem] text-[#161617] hover:text-[#e50914]" : "hidden" }
                        onClick={handleDropdown}
                    /> 
            </div>
        </nav>
    );
};

export default Nav;