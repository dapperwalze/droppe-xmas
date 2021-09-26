import { useState } from "react";
import styles from "./wishlist.module.scss";

interface WishListProps {
  cart: Record<string, any>;
}

const WishList = (props: WishListProps) => {
  const { cart } = props;
  const { products, userName } = cart;
  const [isWishListOpen, setIsWishListOpen] = useState(false);

  const handleToggle = () => {
    setIsWishListOpen((prev) => !prev);
  };

  return (
    <div className={styles.wishListCard}>
      <div className={styles.wishListHeader} onClick={handleToggle}>
        <span className={styles.userName}>{userName}</span>
        <button type="button" className={styles.wishListToggler}>
          {isWishListOpen ? (
            <>
              <i className="ri-arrow-up-s-fill" />
            </>
          ) : (
            <>
              <i className="ri-arrow-down-s-fill" />
            </>
          )}
        </button>
      </div>

      <div
        className={styles.wishListContent}
        style={{
          display: isWishListOpen ? "block" : "none",
        }}
      >
        <ul>
          {products?.map((product: Record<string, any>) => (
            <li key={product.productId} className={styles.listItem}>
              <span className={styles.productTitle}>{product?.title} </span>
              <span className={styles.productPrice}>${product?.price}</span>
              <span className={styles.discardBtnContainer}>
                <button className={styles.discardBtn} type="button">
                  Discard
                </button>
              </span>
            </li>
          ))}
        </ul>
        <div className={styles.approveBtnContainer}>
          <button className={styles.approveBtn} type="button">
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};
export default WishList;
