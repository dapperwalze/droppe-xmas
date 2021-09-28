import { useDispatch, useSelector } from "react-redux";
import WishList from "../../components/WishList";
import { wishlistsSelector } from "../../redux/reducers/wishlistsReducer";
import styles from "./wishlists.module.scss";
import { fetchCarts } from "../../redux/actions/wishlistsActions";
import { useEffect } from "react";

const WishLists = () => {
  const { carts, isLoading } = useSelector(wishlistsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarts());
  }, [dispatch]);

  console.log({ carts });
  console.log({ isLoading });

  const mockApi = [
    {
      id: 1,
      userId: 1,
      userName: "Herik",
      products: [
        {
          id: 1,
          title: "play station",
          price: "700",
        },
        {
          id: 2,
          title: "yeezy boost",
          price: "1500",
        },
        {
          id: 3,
          title: "Macbook",
          price: "1700",
        },
      ],
    },
    {
      id: 2,
      userId: 1,
      userName: "Sophia",
      products: [
        {
          id: 1,
          title: "play station",
          price: "700",
        },
        {
          id: 2,
          title: "yeezy boost",
          price: "1500",
        },
        {
          id: 3,
          title: "Macbook",
          price: "1700",
        },
      ],
    },
    {
      id: 3,
      userId: 1,
      userName: "Carl",
      products: [
        {
          id: 1,
          title: "play station",
          price: "700",
        },
        {
          id: 2,
          title: "yeezy boost",
          price: "1500",
        },
        {
          id: 3,
          title: "Macbook",
          price: "1700",
        },
      ],
    },
    {
      id: 4,
      userId: 1,
      userName: "Cassandra",
      products: [
        {
          id: 1,
          title: "play station",
          price: "700",
        },
        {
          id: 2,
          title: "yeezy boost",
          price: "1500",
        },
        {
          id: 3,
          title: "Macbook",
          price: "1700",
        },
        {
          id: 4,
          title: "airpods",
          price: "200",
        },
      ],
    },
    {
      id: 5,
      userId: 1,
      userName: "Rose",
      products: [
        {
          id: 1,
          title: "play station",
          price: "700",
        },
        {
          id: 2,
          title: "yeezy boost",
          price: "1500",
        },
        {
          id: 3,
          title: "Macbook",
          price: "1700",
        },
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <h2>Wish Lists</h2>

      <div className={styles.row}>
        {mockApi?.map((cart: Record<string, any>) => (
          <WishList key={cart.id} cart={cart} />
        ))}
      </div>
    </div>
  );
};

export default WishLists;
