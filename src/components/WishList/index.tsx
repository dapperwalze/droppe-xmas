import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./wishlist.module.scss";
import { handleCurrencyFormatting } from "./../../utils/helpers";
import { deleteFromWishList } from "../../redux/actions/wishlistsActions";
import { approveWishlist } from "../../redux/actions/wishlistActions";

interface WishListProps {
  cart: Record<string, any>;
  allProducts: Record<string, any>;
}

const WishList = (props: WishListProps) => {
  const { cart, allProducts } = props;
  const { products, id } = cart;
  const [isWishListOpen, setIsWishListOpen] = useState(false);

  const dispatch = useDispatch();

  const handleToggle = useCallback(() => {
    setIsWishListOpen((prev) => !prev);
  }, []);

  const handleDiscardItem = useCallback(
    (cartId, productId) => {
      dispatch(deleteFromWishList(cartId, productId));
    },
    [dispatch]
  );

  const handleWishlistApproval = useCallback(
    (cart) => {
      dispatch(approveWishlist(cart));
    },
    [dispatch]
  );

  return (
    <>
      <div
        className={styles.wishListCard}
        style={{ display: products.length > 0 ? "block" : "none" }}
      >
        <div className={styles.wishListHeader} onClick={handleToggle}>
          <span className={styles.userName}>User ID: {id}</span>
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
            {products?.map((product: Record<string, any>) => {
              let productMatch = allProducts?.find(
                (item: Record<string, any>) => item?.id === product?.productId
              );
              return (
                <li key={product.productId} className={styles.listItem}>
                  <span className={styles.productTitle}>
                    {productMatch?.title}
                  </span>
                  <span className={styles.productPrice}>
                    {handleCurrencyFormatting(productMatch?.price)}
                  </span>
                  <span className={styles.discardBtnContainer}>
                    <button
                      className={styles.discardBtn}
                      type="button"
                      onClick={() => handleDiscardItem(id, product?.productId)}
                    >
                      Discard
                    </button>
                  </span>
                </li>
              );
            })}
          </ul>
          <div className={styles.approveBtnContainer}>
            <button
              className={styles.approveBtn}
              type="button"
              onClick={() => handleWishlistApproval(cart)}
            >
              Approve
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default WishList;
