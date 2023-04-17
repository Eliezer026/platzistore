import React, { useContext } from 'react';
import styles from '@styles/ProductItem.module.scss';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import Image from 'next/image';

const ProductItem = ({ product }: any) => {
  const { state, addToCart }: any = useContext(AppContext);

  const handleClick = (item?: any) => {
    console.log('in cart: ', state.cart.includes(item));
    addToCart(item);
  };

  function handleKeyDown(e: any) {
    if (e.keyCode === 13) {
      handleClick();
    }
  }

  return (
    <div className={styles.ProductItem}>
      <Image src={product.images[0]} alt={product.title} width={48} height={48} />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className={styles['more-clickable-area']}>
          <div onClick={() => handleClick(product)} onKeyDown={handleKeyDown} tabIndex={0} role="button">
            {state.cart.includes(product) ? (
              <Image className={styles['add-to-cart-btn']} src={addedToCartImage} alt="added to cart" />
            ) : (
              <Image className={styles['add-to-cart-btn']} src={addToCartImage} alt="add to cart" />
            )}
          </div>
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
