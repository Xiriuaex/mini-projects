'use client'

import styles from "@/app/styles/navbar.module.css"
import Link from 'next/link';
import Image from 'next/image';
import {useState} from "react";
import Nav from '@/app/components/Nav';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false); 
  const handleDropdown = () => {
      setOpenMenu(!openMenu);
  }
  return (
  <>
    <header className={styles.main_header}>
      <div>
          <Link href="/">
              <h1 className="h-fit text-[4rem] sm:text-[5rem] font-bold">PickMent</h1>
          </Link>
      </div> 
      <Nav openMenu={openMenu} handleDropdown={handleDropdown}/>
    </header>

    <div className={openMenu ? "block absolute z-50 right-0" : "hidden"}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link className={styles.navbarLink} 
                href="/"
                onClick={handleDropdown}
          >Home</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link className={styles.navbarLink} 
                href="/about"
                onClick={handleDropdown}
          >About</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link className={styles.navbarLink}
                onClick={handleDropdown}
                href="/movies"
          >Movie</Link>
        </li>
      </ul>
    </div>
  </>
  )
}

export default Header;
