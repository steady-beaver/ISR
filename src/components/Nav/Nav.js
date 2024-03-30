'use client';

import Facebook from 'components/Social/Facebook';
import Instagram from 'components/Social/Instagram';
import Mail from 'components/Social/Mail';
import Pinterest from 'components/Social/Pinterest';
import Link from 'next/link';
import CloseIcon from 'public/icons/close-new.svg';
import HamburgerIcon from 'public/icons/hamburger-new.svg';
import { useState } from 'react';
import styles from './Nav.module.scss';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      {menuOpen ? (
        <div className={`${styles.openedMenu} headingH4`}>
          <CloseIcon className={styles.closeIcon} onClick={(e) => toggleMenu(e)} />

          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="/services">
            <span>Services</span>
          </Link>
          <Link href="/portfolio">
            <span>Portfolio</span>
          </Link>
          <Link href="/about">
            <span>About me</span>
          </Link>
          <Link href="/blog">
            <span>Journal</span>
          </Link>
          <Link href="/contacts">
            <span>Contact</span>
          </Link>

          <div className={styles.social}>
            <Facebook iconBg={styles.iconBg} />
            <Instagram iconBg={styles.iconBg} />
            <Pinterest iconBg={styles.iconBg} />
            <Mail iconBg={styles.iconBg} />
          </div>
        </div>
      ) : (
        <HamburgerIcon className={styles.hamburgerIcon} onClick={(e) => toggleMenu(e)} />
      )}
    </nav>
  );
};

export default Nav;
