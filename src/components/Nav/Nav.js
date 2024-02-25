'use client';

import Image from 'next/image';
import CloseIcon from 'public/icons/close-new.svg';
import HamburgerIcon from 'public/icons/hamburger-new.svg';
import { useEffect, useState } from 'react';
import styles from './Nav.module.scss';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log('useEffect: menuOpen', menuOpen);
  }, [menuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      {menuOpen ? (
        <div className={`${styles.openedMenu} headingH4`}>
          <CloseIcon className={styles.closeIcon} onClick={(e) => toggleMenu(e)} />
          <span>Home</span>
          <span>About me</span>
          <span>Services</span>
          <span>Portfolio</span>
          <span>Journal</span>

          <div className={styles.social}>
            <a href="https://hotmail.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/social/mail.svg" alt="e-mail contact" width={32} height={32} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/social/fb.svg" alt="Facebook contact" width={32} height={32} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/social/instagram.svg" alt="Instagram contact" width={32} height={32} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/social/pinterest.svg" alt="Pinterest contact" width={32} height={32} />
            </a>
          </div>
        </div>
      ) : (
        <HamburgerIcon onClick={(e) => toggleMenu(e)} />
      )}
    </nav>
  );
};

export default Nav;
