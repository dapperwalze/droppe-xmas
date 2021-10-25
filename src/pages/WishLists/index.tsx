import { useDispatch, useSelector } from "react-redux";
import WishList from "../../components/WishList";
import { wishlistsSelector } from "../../redux/reducers/wishlistsReducer";
import styles from "./wishlists.module.scss";
import { fetchCarts } from "../../redux/actions/wishlistsActions";
import { useCallback, useEffect, useState } from "react";
import { getAllProducts } from "./../../redux/actions/productActions";
import Modal from "../../components/Modal";
import { wishlistSelector } from "../../redux/reducers/wishlistReducer";
import { walletSelector } from "../../redux/reducers/walletReducer";
import { setAmountAfterDiscount } from "../../redux/actions/wishlistActions";

const WishLists = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { carts, hasErrors, isLoading } = useSelector(wishlistsSelector);
  const dispatch = useDispatch();

  const { userSettings, amountAfterDiscount } = useSelector(wishlistSelector);

  const { limitPerWishlist } = userSettings;

  const { walletBalance } = useSelector(walletSelector);

  useEffect(() => {
    dispatch(fetchCarts());
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleCancel = useCallback(
    (e) => {
      e.stopPropagation();
      setIsVisible(false);
    },
    [setIsVisible]
  );

  const handleGetAmount = useCallback(
    (
      handleGetProductsWithDiscount: () => any,
      approvedWishlists: Record<string, any>[],
      allProducts: Record<string, any>[]
    ) => {
      let productsWithDiscount = handleGetProductsWithDiscount();
      let totalAmount = 0;

      approvedWishlists.forEach((cart: Record<string, any>) => {
        cart.products.forEach((product: Record<string, any>) => {
          let productMatch = allProducts?.find(
            (item: Record<string, any>) => item?.id === product?.productId
          );

          let amount = productMatch?.price * product?.quantity;
          totalAmount += +amount.toFixed(2);

          let amountAfterDiscount = productsWithDiscount.reduce(
            (accumulator: number, current: Record<string, any>) =>
              accumulator - (current?.discount / 100) * accumulator,
            totalAmount
          );
          return dispatch(setAmountAfterDiscount(amountAfterDiscount));
        });
      });
    },
    [dispatch]
  );

  const renderWishlists = useCallback(() => {
    if (isLoading) return <>loading...</>;

    if (hasErrors)
      return (
        <>
          Couldn't fetch wishlists, please check your connection and try again.
        </>
      );
    return carts?.map((cart: Record<string, any>) => (
      <WishList key={cart.id} cart={cart} setIsVisible={setIsVisible} />
    ));
  }, [carts, hasErrors, isLoading]);

  return (
    <>
      <div className={styles.container}>
        <h2>Wish Lists</h2>
        <div className={styles.row}>{renderWishlists()}</div>
      </div>

      {walletBalance < 1 ||
      walletBalance < amountAfterDiscount ||
      limitPerWishlist < 1 ? (
        <Modal
          messageStatus={`Can't approve this wishlist as ${
            limitPerWishlist < 1
              ? "it surpasses your spend limit"
              : "your wallet balance is low"
          } `}
          messageHeader="Ooops! 😞"
          onCancel={handleCancel}
          visible={isVisible}
          handleGetAmount={handleGetAmount}
        />
      ) : (
        <Modal
          messageStatus="You've sucessfully approved this wishlist"
          messageHeader="Yay! 🎉"
          onCancel={handleCancel}
          visible={isVisible}
          handleGetAmount={handleGetAmount}
        />
      )}
    </>
  );
};

export default WishLists;
