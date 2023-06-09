import React, { useContext } from 'react';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  const { state, toggleOrder, toggleMenu }: any = useContext(AppContext);

  function handleKeyDown(e: any) {
    if (e.keyCode === 13) {
      toggleMenu();
    }
  }
  return (
    <>
      <nav className={styles.Nav}>
        <Image src={menu} alt="menu" className={styles.menu} />
        <div className={styles['navbar-left']}>
          <Link href="/">
            <Image src={logo} alt="logo" className={styles['nav-logo']} />
          </Link>
          <ul>
            <li>
              <Link href="/">All</Link>
            </li>
            <li>
              <Link href="/">Clothes</Link>
            </li>
            <li>
              <Link href="/">Electronics</Link>
            </li>
            <li>
              <Link href="/">Furnitures</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li className={styles['more-clickable-area navbar-email pointer']}>
              <div onClick={() => toggleMenu()} onKeyDown={handleKeyDown} role="button" tabIndex={0}>
                platzi@example.com
              </div>
            </li>
            <li className={styles['navbar-shopping-cart']}>
              <div onClick={() => toggleOrder()} onKeyDown={handleKeyDown} role="button" tabIndex={0}>
                <Image className={styles['more-clickable-area pointer']} src={shoppingCart} alt="shopping cart" />
                {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
              </div>
            </li>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
      </nav>
      {state.orderIsOpen && <MyOrder />}
    </>
  );
};

export default Header;
