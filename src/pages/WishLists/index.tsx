import { useDispatch, useSelector } from "react-redux";
import WishList from "../../components/WishList";
import { allProductsSelector } from "../../redux/reducers/allProductsReducer";
import { wishlistsSelector } from "../../redux/reducers/wishlistsReducer";
import styles from "./wishlists.module.scss";
import { fetchCarts } from "../../redux/actions/wishlistsActions";
import { useCallback, useEffect } from "react";
import { getAllProducts } from "./../../redux/actions/productActions";

const WishLists = () => {
  const { allProducts } = useSelector(allProductsSelector);
  const { carts, hasErrors, isLoading } = useSelector(wishlistsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarts());
    dispatch(getAllProducts());
  }, [dispatch]);

  const renderWishlists = useCallback(() => {
    if (isLoading) return <>loading...</>;

    if (hasErrors)
      return (
        <p>
          Couldn't fetch wishlists, please check your connection and try again.
        </p>
      );
    return carts?.map((cart: Record<string, any>) => (
      <WishList key={cart.id} cart={cart} allProducts={allProducts} />
    ));
  }, [allProducts, carts, hasErrors, isLoading]);

  return (
    <div className={styles.container}>
      <h2>Wish Lists</h2>
      <div className={styles.row}>{renderWishlists()}</div>
    </div>
  );
};

export default WishLists;
