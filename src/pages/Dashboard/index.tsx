import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { walletSelector } from "../../redux/reducers/walletReducer";
import { wishlistsSelector } from "../../redux/reducers/wishlistsReducer";
import styles from "./dashboard.module.scss";
import { handleCurrencyFormatting } from "./../../utils/helpers";
import { useEffect } from "react";
import { fetchCarts } from "../../redux/actions/wishlistsActions";
import { getAllProducts } from "../../redux/actions/productActions";
import { wishlistSelector } from "../../redux/reducers/wishlistReducer";

const Dashboard = () => {
  const { carts, isLoading } = useSelector(wishlistsSelector);
  const { walletBalance } = useSelector(walletSelector);
  const { approvedWishlists, userSettings } = useSelector(wishlistSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarts());
    dispatch(getAllProducts());
  }, [dispatch]);

  const activeWishLists = carts.length;

  return (
    <div className={styles.container}>
      <h2 className={styles.welcomeGreeting}>Hello, {userSettings.username}</h2>

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
          <span className={styles.cardContentCount}>
            {isLoading ? "..." : `${activeWishLists}`}
          </span>
        </div>

        <div className={styles.wishlistCard}>
          <span className={styles.cardContentLabel}>
            <span className={styles.cardIcon3}>
              <i className="ri-check-double-line" />
            </span>
            <span>Approved Requests</span>
          </span>
          <span className={styles.cardContentCount}>
            {approvedWishlists?.length}
          </span>
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
            <Link
              to="#"
              className={styles.viewMoreLink}
              style={{ display: approvedWishlists < 1 ? "none" : "visible" }}
            >
              View all
            </Link>
          </div>

          <ul className={styles.ulist}>
            {approvedWishlists.length < 1 ? (
              <span>No wishlist has been approved</span>
            ) : (
              approvedWishlists.slice(0, 3).map((cart: Record<string, any>) => (
                <li className={styles.approvedListItem}>
                  <div className={styles.listData}>
                    <span>User ID: {cart?.id} </span> <span>$140.23</span>
                  </div>
                  <div className={styles.itemCount}>
                    <span>Items: </span> {cart?.products?.length}
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
