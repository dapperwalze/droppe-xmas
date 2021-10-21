import { Link } from "react-router-dom";
import styles from "./marketplace.module.scss";
import { ProductCard } from "./../../components/Cards/ProductCard/index";

const MarketPlace = () => {
  return (
    <div className={styles.marketPlace}>
      <h2 className={styles.pageHeader}>
        The best place to get what you need.
      </h2>

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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
