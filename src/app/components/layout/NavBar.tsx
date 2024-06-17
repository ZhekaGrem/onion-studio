'use client';
import Link from 'next/link';
import React,{useRef, useState} from 'react';
import style from '@/app/assets/styles/navbar.module.css';
import { motion,useCycle } from 'framer-motion';
import Logo from '../common/Logo';
import {navbar} from '@/app/data/data'

type NavList = {
  url: string;
  title: string;
  id: number;
};

type UseCycleReturn = [boolean, () => void];

const navlist: NavList[] = navbar;

const menuVariants = {
  open: {
    height: '100vh',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    height: 0,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.5 },
  },
};

const NavBar = () => {
  const [isOpen, toggleOpen]: UseCycleReturn = useCycle(false, true);
 const [isChecked, setIsChecked] = useState(false);
 const checkboxRef = useRef(null);

 const handleLinkClick = () => {
   toggleOpen();
   setIsChecked(!isChecked);
 };

 const handleCheckboxChange = () => {
   toggleOpen();
   setIsChecked(!isChecked);
 };
  return (
    <header>
      <div className={style.header}>
        <nav className={style.navBar}>
          <div className={style.logo}>
            <Logo />
          </div>
          <ul className={style.navBarList}>
            {navlist.map((item) => (
              <li key={item.id}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div className={style.burgerBtn}>
            <input
              type="checkbox"
              role="button"
              aria-label="Display the menu"
              className={style.menu}
              onChange={handleCheckboxChange}
              ref={checkboxRef}
              checked={isChecked}
            />
          </div>
        </nav>
        <motion.div
          className={`${style.mobileMenu} ${isOpen ? style.active : style.closed}`}
          variants={menuVariants}
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
        >
          <ul className={style.mobileMenuList}>
            {navlist.map((item) => (
              <motion.li key={item.id} variants={itemVariants}>
                <Link onClick={handleLinkClick} href={item.url}>
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </header>
  );
};

export default NavBar;
