import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { walletSelector } from "../../redux/reducers/walletReducer";
import { wishlistsSelector } from "../../redux/reducers/wishlistsReducer";
import styles from "./dashboard.module.scss";
import { handleCurrencyFormatting } from "./../../utils/helpers";
import { useEffect } from "react";
import { fetchCarts } from "../../redux/actions/wishlistsActions";

const Dashboard = () => {
  const { carts, isLoading } = useSelector(wishlistsSelector);
  const { walletBalance } = useSelector(walletSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarts());
  }, [dispatch]);

  const activeWishLists = carts.length;

  return (
    <div className={styles.container}>
      <h2 className={styles.welcomeGreeting}>Hello, Walter.</h2>

      <section className={styles.firstRow}>
        <div className={styles.wishlistCard}>
          <span className={styles.cardContentLabel}>
            <span className={styles.cardIcon1}>
              <i className="ri-file-list-line" />
            </span>
            <span>Active Wishlists</span>
          </span>
          <span className={styles.cardContentCount}>
            {isLoading ? "..." : `${activeWishLists}`}
          </span>
        </div>

        <div className={styles.wishlistCard}>
          <span className={styles.cardContentLabel}>
            <span className={styles.cardIcon2}>
              <i className="ri-inbox-line" />
            </span>
            <span>Total Requests</span>
          </span>
          <span className={styles.cardContentCount}>30</span>
        </div>

        <div className={styles.wishlistCard}>
          <span className={styles.cardContentLabel}>
            <span className={styles.cardIcon3}>
              <i className="ri-check-double-line" />
            </span>
            <span>Approved Requests</span>
          </span>
          <span className={styles.cardContentCount}>15</span>
        </div>
      </section>

      <section className={styles.secondRow}>
        <div className={styles.walletCard}>
          <span className={styles.walletHeader}>Wallet Balance</span>
          <span className={styles.walletValue}>
            {handleCurrencyFormatting(walletBalance)}
          </span>
          <Link to="/wallet" className={styles.walletCTA}>
            Top Up
          </Link>
        </div>
        <div className={styles.approvedListCard}>
          <div className={styles.listHeader}>
            <span className={styles.recentApproval}>Recent approvals</span>
            <Link to="#" className={styles.viewMoreLink}>
              View all
            </Link>
          </div>

          <ul className={styles.ulist}>
            <li className={styles.approvedListItem}>
              <div className={styles.listData}>
                <span>Henrik Larson</span> <span>$140.23</span>
              </div>
              <div className={styles.itemCount}>
                <span>Items: </span> 12
              </div>
            </li>
            <li className={styles.approvedListItem}>
              <div className={styles.listData}>
                <span>Carl lenon</span> <span>$10.3</span>
              </div>
              <div className={styles.itemCount}>
                <span>Items: </span> 1
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
