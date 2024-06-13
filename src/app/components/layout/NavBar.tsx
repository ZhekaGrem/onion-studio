'use client';
import Link from 'next/link';
import React from 'react';
import style from '@/app/assets/styles/navbar.module.css';
import BuregerOpenBtn from '@/app/animation/BuregerOpenBtn';
import { motion,useCycle } from 'framer-motion';
import Logo from '../common/Logo';

type NavList = {
  url: string;
  title: string;
  id: number;
};

type UseCycleReturn = [boolean, () => void];

const navlist: NavList[] = [
  {
    url: '#',
    title: 'ДІМ',
    id: 1,
  },
  {
    url: '#youwant',
    title: 'ДЛЯ ВАС',
    id: 2,
  },
  {
    url: '#aboutus',
    title: 'ПРО НАС',
    id: 3,
  },
  {
    url: '#recording',
    title: 'ЗАПИСАТИСЬ',
    id: 4,
  },
  {
    url: '#contact',
    title: "ЗВ'ЯЗАТИСЬ",
    id: 5,
  },
];

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
  return (
    <header>
      <div className={style.header}>
        <nav className={style.navBar}>
          <div className={style.logo}><Logo/></div>
          <ul className={style.navBarList}>
            {navlist.map((item) => (
              <li key={item.id}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div className={style.burgerBtn}>
            <BuregerOpenBtn onChange={() => toggleOpen()} />
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
                <Link href={item.url}>{item.title}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </header>
  );
};

export default NavBar;
