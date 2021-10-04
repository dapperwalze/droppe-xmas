import React, { useState } from "react";
import { useSelector } from "react-redux";
import { allProductsSelector } from "../../redux/reducers/allProductsReducer";
import { walletSelector } from "../../redux/reducers/walletReducer";
import { wishlistSelector } from "../../redux/reducers/wishlistReducer";
import { wishlistsSelector } from "../../redux/reducers/wishlistsReducer";
import { handleCurrencyFormatting } from "../../utils/helpers";
import styles from "./modal.module.scss";

interface Props {
  messageHeader?: string;
  messageStatus: string;
  visible: boolean;
  onCancel: (e: Record<string, any>) => void;
}

const Modal = (props: Props) => {
  const { messageHeader, messageStatus, visible, onCancel } = props;
  const { allProducts } = useSelector(allProductsSelector);
  const { discardedItems } = useSelector(wishlistsSelector);
  const { userSettings, approvedWishlists } = useSelector(wishlistSelector);
  const { limitPerWishlist } = userSettings;
  const { walletBalance } = useSelector(walletSelector);
  const [amount, setAmount] = useState(0);
  const [discountedAmount, setDiscountedAmount] = useState(0);

  const productOccurence: Record<string, any> = {};
  approvedWishlists.forEach((cart: Record<string, any>) => {
    cart.products.forEach((product: Record<string, any>) => {
      if (!productOccurence[product.productId]) {
        productOccurence[product.productId] = { count: 0, totalQuantity: 0 };
      }
      productOccurence[product.productId].count += 1;
      productOccurence[product.productId].totalQuantity += product.quantity;
      productOccurence[product.productId].productId = product.productId;
    });
  });

  const productsWithDiscount = Object.values(productOccurence)
    .filter(({ count }) => count > 1)
    .map((prod) => ({ ...prod, discount: prod.count * 10 }));

  console.log({ productsWithDiscount });

  approvedWishlists.forEach((cart: Record<string, any>) => {
    cart.products.forEach((product: Record<string, any>) => {
      let productMatch = allProducts?.find(
        (item: Record<string, any>) => item?.id === product?.productId
      );
      const totalAmount = productMatch?.price * product?.quantity;
      setAmount(totalAmount);

      productsWithDiscount.forEach((product) => {
        let amountAfterDiscount =
          totalAmount - (product?.discount / 100) * totalAmount;
        console.log("dif:", totalAmount - amountAfterDiscount);
        setDiscountedAmount(amountAfterDiscount);
        return amountAfterDiscount;
      });
    });
  });
  return (
    <div
      className={styles.modalBg}
      style={{ display: visible ? "block" : "none" }}
    >
      <div className={styles.container}>
        <div className={styles.modalHeader}>
          <span></span>
          <button
            type="button"
            className={styles.cancelIcon}
            onClick={onCancel}
          >
            <i
              className="ri-close-line"
              style={{
                fontSize: 20,
              }}
            />
          </button>
        </div>

        <div className={styles.modalBody}>
          <span className={styles.messageHeader}>{messageHeader}</span>
          <span className={styles.messageStatus}>{messageStatus}</span>
          {limitPerWishlist < 200 || walletBalance < 1 ? (
            ""
          ) : (
            <div className={styles.messageBody}>
              {" "}
              <ul>
                <p>Approved items: </p>{" "}
                {approvedWishlists?.map((cart: Record<string, any>) =>
                  cart.products.map((product: Record<string, any>) => {
                    let productMatch = allProducts?.find(
                      (item: Record<string, any>) =>
                        item?.id === product?.productId
                    );
                    return (
                      <li key={productMatch.id} className={styles.listItem}>
                        <span className={styles.productTitle}>
                          {productMatch.title}
                        </span>
                      </li>
                    );
                  })
                )}
              </ul>
              <ul>
                <p>Discarded items:</p>
                {discardedItems.length < 1 ? (
                  <p>This space is empty 😶</p>
                ) : (
                  discardedItems.map((product: Record<string, any>) => {
                    let productMatch = allProducts?.find(
                      (item: Record<string, any>) =>
                        item?.id === product?.productId
                    );
                    return (
                      <li key={productMatch.id} className={styles.listItem}>
                        <span className={styles.productTitle}>
                          {productMatch.title}
                        </span>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Modal;
