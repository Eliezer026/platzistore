import React, { useContext } from 'react';
import Link from 'next/link';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import styles from '@styles/MyOrder.module.scss';
import arrow from '@icons/flechita.svg';
import Image from 'next/image';
const MyOrder = () => {
  const { state, toggleOrder }: any = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (accumalator: any, currentValue: any) => accumalator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className={styles.MyOrder}>
      <div className={styles['MyOrder-container']}>
        <div className={styles['title-container']}>
          <Image className={(styles['more-clickable-area'], styles.pointer)} src={arrow} alt="arrow" onClick={() => toggleOrder()} />
          <p className={styles.title}>My order</p>
        </div>
        <div className={styles['my-order-content']}>
          <div className={styles['my-orders']}>
            {state.cart.map((product: any) => (
              <OrderItem product={product} key={`orderItem-${product?.id}`} />
            ))}
          </div>
          <div className={styles.order}>
            <p>
              <span>Total</span>
            </p>
            <p>${sumTotal()}</p>
          </div>
          <Link href="/checkout" className={styles['primary-button']}>
            Checkout
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default MyOrder;
