import { Link } from "react-router-dom";
import styles from "./marketplace.module.scss";
import Laptop from "./../../app/assets/images/laptop.jpg";
import Mouse from "./../../app/assets/images/mouse.jpg";

const MarketPlace = () => {
  return (
    <div className={styles.marketPlace}>
      <h2>The best place to get what you need.</h2>

      <div className={styles.categoryRow}>
        <div className={styles.categoryHeader}>
          <h3>Electronics</h3>
          <span className={styles.viewMoreLink}>
            <Link to="#">
              view more <i className="ri-arrow-right-line"></i>
            </Link>
          </span>
        </div>
        <div className={styles.productGallery}>
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

          <div className={styles.productCard}>
            <div className={styles.productImage}>
              <img src={Mouse} alt="product name" />
            </div>
            <div className={styles.productCardDetails}>
              <span className={styles.productPrice}>$ 100.00</span>
              <span className={styles.productName}> Mouse</span>
              <span className={styles.productDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </span>
              <button className={styles.addToCartBtn} type="button">
                Add To Cart
              </button>
            </div>
          </div>

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

          <div className={styles.productCard}>
            <div className={styles.productImage}>
              <img src={Mouse} alt="product name" />
            </div>
            <div className={styles.productCardDetails}>
              <span className={styles.productPrice}>$ 100.00</span>
              <span className={styles.productName}>Mouse</span>
              <span className={styles.productDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </span>
              <button className={styles.addToCartBtn} type="button">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.categoryRow}>
        <div className={styles.categoryHeader}>
          <h3>Jewelry</h3>
          <span className={styles.viewMoreLink}>
            <Link to="#">
              view more <i className="ri-arrow-right-line"></i>
            </Link>
          </span>
        </div>
        <div className={styles.productGallery}>
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

          <div className={styles.productCard}>
            <div className={styles.productImage}>
              <img src={Mouse} alt="product name" />
            </div>
            <div className={styles.productCardDetails}>
              <span className={styles.productPrice}>$ 100.00</span>
              <span className={styles.productName}> Mouse</span>
              <span className={styles.productDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </span>
              <button className={styles.addToCartBtn} type="button">
                Add To Cart
              </button>
            </div>
          </div>

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

          <div className={styles.productCard}>
            <div className={styles.productImage}>
              <img src={Mouse} alt="product name" />
            </div>
            <div className={styles.productCardDetails}>
              <span className={styles.productPrice}>$ 100.00</span>
              <span className={styles.productName}>Mouse</span>
              <span className={styles.productDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </span>
              <button className={styles.addToCartBtn} type="button">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.categoryRow}>
        <div className={styles.categoryHeader}>
          <h3>Men's Clothing</h3>
          <span className={styles.viewMoreLink}>
            <Link to="#">
              view more <i className="ri-arrow-right-line"></i>
            </Link>
          </span>
        </div>
        <div className={styles.productGallery}>
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

          <div className={styles.productCard}>
            <div className={styles.productImage}>
              <img src={Mouse} alt="product name" />
            </div>
            <div className={styles.productCardDetails}>
              <span className={styles.productPrice}>$ 100.00</span>
              <span className={styles.productName}> Mouse</span>
              <span className={styles.productDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </span>
              <button className={styles.addToCartBtn} type="button">
                Add To Cart
              </button>
            </div>
          </div>

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

          <div className={styles.productCard}>
            <div className={styles.productImage}>
              <img src={Mouse} alt="product name" />
            </div>
            <div className={styles.productCardDetails}>
              <span className={styles.productPrice}>$ 100.00</span>
              <span className={styles.productName}>Mouse</span>
              <span className={styles.productDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </span>
              <button className={styles.addToCartBtn} type="button">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.categoryRow}>
        <div className={styles.categoryHeader}>
          <h3>Women's Clothing</h3>
          <span className={styles.viewMoreLink}>
            <Link to="#">
              view more <i className="ri-arrow-right-line"></i>
            </Link>
          </span>
        </div>
        <div className={styles.productGallery}>
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

          <div className={styles.productCard}>
            <div className={styles.productImage}>
              <img src={Mouse} alt="product name" />
            </div>
            <div className={styles.productCardDetails}>
              <span className={styles.productPrice}>$ 100.00</span>
              <span className={styles.productName}> Mouse</span>
              <span className={styles.productDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </span>
              <button className={styles.addToCartBtn} type="button">
                Add To Cart
              </button>
            </div>
          </div>

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

          <div className={styles.productCard}>
            <div className={styles.productImage}>
              <img src={Mouse} alt="product name" />
            </div>
            <div className={styles.productCardDetails}>
              <span className={styles.productPrice}>$ 100.00</span>
              <span className={styles.productName}>Mouse</span>
              <span className={styles.productDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </span>
              <button className={styles.addToCartBtn} type="button">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
