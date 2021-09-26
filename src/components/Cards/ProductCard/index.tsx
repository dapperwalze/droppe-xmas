import styles from "./productcard.module.scss";
import Laptop from "./../../../app/assets/images/laptop.jpg";

export const ProductCard = () => {
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={Laptop} alt="product name" />
      </div>
      <div className={styles.productCardDetails}>
        <span className={styles.productPrice}>$ 100.00</span>
        <span className={styles.productName}>MacBook pro</span>
        <span className={styles.productDescription}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
        </span>
        <button className={styles.addToCartBtn} type="button">
          Add To Cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
