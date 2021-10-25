import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCurrencyFormatting } from "./../../utils/helpers";
import { deleteFromWishList } from "../../redux/actions/wishlistsActions";
import {
  approveWishlistFailure,
  saveCart,
} from "../../redux/actions/wishlistActions";
import { wishlistSelector } from "../../redux/reducers/wishlistReducer";
import { walletSelector } from "../../redux/reducers/walletReducer";
import styles from "./wishlist.module.scss";
import { allProductsSelector } from "../../redux/reducers/allProductsReducer";

interface WishListProps {
  cart: Record<string, any>;
  setIsVisible: (arg: any) => any;
}

const WishList = (props: WishListProps) => {
  const { cart, setIsVisible } = props;
  const { products, id } = cart;

  const { allProducts } = useSelector(allProductsSelector);

  const [isWishListOpen, setIsWishListOpen] = useState(false);

  const { userSettings, amountAfterDiscount } = useSelector(wishlistSelector);
  const { limitPerWishlist } = userSettings;

  const { walletBalance } = useSelector(walletSelector);

  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsWishListOpen((prev) => !prev);
  };

  const handleDiscardItem = (cartId: number, productId: number) => {
    dispatch(deleteFromWishList(cartId, productId));
  };

  const handleWishlistApproval = (cart: Record<string, any>) => {
    if (walletBalance > amountAfterDiscount && limitPerWishlist > 0) {
      dispatch(saveCart(cart));
      setIsVisible(true);
      handleToggle();
    }
    dispatch(approveWishlistFailure());
    setIsVisible(true);
  };

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
