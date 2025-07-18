import {  NavLink } from 'react-router';

import styles from '../styles.module.css'




export default function HeaderNavigation () {
  return (
    <header className={styles.navbar}>
    <div className={styles.logo}>Magazines</div>
    <nav>
      <ul>
        <li><NavLink to='/' style={({ isActive }) => (isActive ? { fontWeight: 'bold' } : undefined)}>Home</NavLink></li>
        <li><NavLink to='/home/blog' style={({ isActive }) => (isActive ? { fontWeight: 'bold' } : undefined)}>Blog</NavLink></li>
        <li><NavLink to='/home/category' style={({ isActive }) => (isActive ? { fontWeight: 'bold' } : undefined)}>Category</NavLink></li>
        <li><NavLink to='/home/product' style={({ isActive }) => (isActive ? { fontWeight: 'bold' } : undefined)}>Product</NavLink></li>
        <li><NavLink to='/home/login' style={({ isActive }) => (isActive ? { fontWeight: 'bold' } : undefined)}>Login</NavLink></li>
        <li><NavLink to='/home/customer' style={({ isActive }) => (isActive ? { fontWeight: 'bold' } : undefined)}>Customer</NavLink></li>
        <li><NavLink to='/home/cart' style={({ isActive }) => (isActive ? { fontWeight: 'bold' } : undefined)}>
          🛒 <span className={styles.badge}>0</span></NavLink></li>
      </ul>
    </nav>
  </header>
   

  );
}