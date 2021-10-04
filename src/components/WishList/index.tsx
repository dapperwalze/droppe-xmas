import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./wishlist.module.scss";
import { handleCurrencyFormatting } from "./../../utils/helpers";
import { deleteFromWishList } from "../../redux/actions/wishlistsActions";
import {
  approveWishlistFailure,
  saveCart,
} from "../../redux/actions/wishlistActions";
import Modal from "../Modal";
import { wishlistSelector } from "../../redux/reducers/wishlistReducer";
import { walletSelector } from "../../redux/reducers/walletReducer";

interface WishListProps {
  cart: Record<string, any>;
  allProducts: Record<string, any>;
}

const WishList = (props: WishListProps) => {
  const { cart, allProducts } = props;
  const { products, id } = cart;
  const [isWishListOpen, setIsWishListOpen] = useState(false);
  const { userSettings } = useSelector(wishlistSelector);
  const { limitPerWishlist } = userSettings;
  const { walletBalance } = useSelector(walletSelector);
  const [isVisible, setIsVisible] = useState(false);
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
      if (walletBalance > 0 && limitPerWishlist > 0) {
        dispatch(saveCart(cart));
        setIsVisible(true);
      }
      if (walletBalance < 1 || limitPerWishlist < 1) {
        dispatch(approveWishlistFailure());
        setIsVisible(true);
      }
    },
    [dispatch, walletBalance, limitPerWishlist]
  );

  const handleCancel = useCallback(
    (e) => {
      e.stopPropagation();
      setIsVisible(false);
    },
    [setIsVisible]
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
      {limitPerWishlist < 200 || walletBalance < 1 ? (
        <Modal
          messageStatus={`Can't approve this wishlist as ${
            limitPerWishlist < 200
              ? "it surpasses your spend limit"
              : "your wallet balance is low "
          } `}
          messageHeader="Ooops! 😞"
          onCancel={handleCancel}
          visible={isVisible}
        />
      ) : (
        <Modal
          messageStatus="You've sucessfully approved this wishlist"
          messageHeader="Yay! 🎉"
          onCancel={handleCancel}
          visible={isVisible}
        />
      )}
    </>
  );
};
export default WishList;
