'use client';

import Image from 'next/image';
import Link from 'next/link';
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

          <Link href="/">
            <span>Home</span>
          </Link>
          <Link href="/about">
            <span>About me</span>
          </Link>
          <Link href="/services">
            <span>Services</span>
          </Link>
          {/* ================================= */}
          {/* blog */}
          <Link href="#">
            <span>Journal</span>
          </Link>
          <Link href="#">
            <span>Contact</span>
          </Link>

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
