"use client";
import Link from 'next/link';
import classNames from 'classnames';
import styles from '@/components/ui/Navbar.module.css';

export const NavItem = ({ title, link, isActive, index }) => {
  return (
    <li className={classNames(styles.navbarLinks, { [styles.isLinkActive]: isActive })}>
      <Link href={link}>
        <b>{String(index).padStart(2, '0')}</b> {title}
      </Link>
    </li>
  );
};