import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import styles from '@styles/OrderItem.module.scss';
import close from '@icons/icon_close.png';
import Image from 'next/image';
const OrderItem = ({ product }: any) => {
  const { removeFromCart }: any = useContext(AppContext);

  const handleRemove = (product: any) => {
    removeFromCart(product);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image width={30} height={30} src={product?.images[0]} alt={product?.title} />
      </figure>
      <p>{product?.title}</p>
      <p>${product?.price}</p>
      <Image width={30} height={30} className={(styles['more-clickable-area'], styles.pointer)} src={close} alt="close" onClick={() => handleRemove(product)} />
    </div>
  );
};

export default OrderItem;
