import React, { ReactNode, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { allProductsSelector } from "../../redux/reducers/allProductsReducer";
import { wishlistSelector } from "../../redux/reducers/wishlistReducer";
import { wishlistsSelector } from "../../redux/reducers/wishlistsReducer";
import styles from "./modal.module.scss";
import { handleCurrencyFormatting } from "./../../utils/helpers";

interface ModalProps {
  messageHeader?: string;
  messageStatus: ReactNode | ReactNode[];
  visible: boolean;
  handleGetAmount: (...arg: any) => any;
  onCancel: (e: Record<string, any>) => void;
}

const Modal = (props: ModalProps) => {
  const { messageHeader, messageStatus, visible, handleGetAmount, onCancel } =
    props;

  const { allProducts } = useSelector(allProductsSelector);

  const { discardedItems } = useSelector(wishlistsSelector);

  const { approvedWishlists, amountAfterDiscount } =
    useSelector(wishlistSelector);

  const handleGetProductsWithDiscount = useCallback(() => {
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
    return productsWithDiscount;
  }, [approvedWishlists]);

  const handleGetDiscount = useCallback(() => {
    const products = handleGetProductsWithDiscount();
    let discountReceived = products.reduce(
      (accumulator: number, current: Record<string, any>) =>
        accumulator + current?.discount,
      0
    );
    return discountReceived;
  }, [handleGetProductsWithDiscount]);

  useEffect(() => {
    handleGetAmount(
      handleGetProductsWithDiscount,
      approvedWishlists,
      allProducts
    );
  }, [
    allProducts,
    approvedWishlists,
    handleGetProductsWithDiscount,
    handleGetAmount,
  ]);

  return (
    <div
      className={styles.modalBg}
      style={{ display: visible ? "block" : "none" }}
    >
      <div className={styles.container}>
        <div className={styles.modalHeader}>
          <span />
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
          {
            <>
              <div className={styles.messageBody}>
                {approvedWishlists?.length > 0 && <p>Approved items: </p>}
                <ul>
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
                {discardedItems?.length > 0 && <p>Discarded items:</p>}
                <ul>
                  {discardedItems?.length > 0 &&
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
                    })}
                </ul>

                {approvedWishlists?.length > 0 && (
                  <>
                    <p>
                      Total Amount:{" "}
                      {handleCurrencyFormatting(+amountAfterDiscount)}
                    </p>
                    <p>Discount Received: {handleGetDiscount()}%</p>
                  </>
                )}
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
};
export default Modal;
