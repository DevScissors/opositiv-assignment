import React, { useState } from "react";
import PurchaseBox from "./components/PurchaseBox/PurchaseBox";
import Button from "./components/shared/Button/Button";

import styles from "./App.module.scss";

function App() {
  const purchaseType = {
    SUBSCRIPTION: "subscribe",
    ONE_TIME: "one-time",
  };

  const priceByPurchaseTypeAndQuantity = {
    [purchaseType.SUBSCRIPTION]: {
      1: 26.99,
      2: 24.99,
      3: 24,
    },
    [purchaseType.ONE_TIME]: {
      1: 31.99,
      2: 26.99,
      3: 26,
    },
  };

  const quantity = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
  };

  const itemName = {
    CAPSULE: "FLO - PMS Vitamin Capsule",
    GUMMIES: "FLO - PMS Gummy Vitamins",
  };

  const cartValues = {
    ITEMS: ["Item Name | Type | Count"],
  };

  const [optionSelected, setSelectedOption] = useState(itemName.CAPSULE);
  const [purchaseTypeSelected, setSelectedPurchaseType] = useState(
    purchaseType.SUBSCRIPTION
  );
  const [quantitySelected, setQuantity] = useState(quantity.ONE);
  const [itemsSelected, setItemsSelected] = useState(cartValues.ITEMS);

  const handleOptionChange = (checkedValue) => {
    setSelectedOption(checkedValue.target.value);
  };

  const handlePurchaseTypeChange = (checkedValue) => {
    setSelectedPurchaseType(checkedValue.target.value);
  };

  const handleQuantityChange = (quantitySelected) => {
    setQuantity(quantitySelected);
  };

  const updateCart = () => {
    const purchaseTypeCartDescritption =
      purchaseTypeSelected === "subscribe"
        ? `Subscription every ${quantitySelected} month(s)`
        : "One Time";
    const newCart = [
      ...itemsSelected,
      optionSelected +
        " | " +
        purchaseTypeCartDescritption +
        " | " +
        quantitySelected,
    ];
    setItemsSelected(newCart);
    alert(newCart.join("\n"));
  };

  return (
    <div className={styles.App}>
      <PurchaseBox
        optionSelected={optionSelected}
        purchaseTypeSelected={purchaseTypeSelected}
        quantitySelected={quantitySelected}
        priceMap={priceByPurchaseTypeAndQuantity}
        handleOptionChange={handleOptionChange}
        handlePurchaseTypeChange={handlePurchaseTypeChange}
        handleQuantityChange={handleQuantityChange}
      />
      <Button
        classNameOverride={styles["btn-cart-submit"]}
        label={"ADD TO CART - "}
        span={
          <>
            <span className={styles["cart-original-price"]}>
              {purchaseTypeSelected === "subscribe"
                ? "$" +
                  priceByPurchaseTypeAndQuantity["one-time"][quantitySelected] *
                    quantitySelected
                : quantitySelected > 1 &&
                  "$" +
                    priceByPurchaseTypeAndQuantity[purchaseTypeSelected][1] *
                      quantitySelected}
            </span>
            <span className={styles["cart-promotional-price"]}>
              $
              {priceByPurchaseTypeAndQuantity[purchaseTypeSelected][
                quantitySelected
              ] * quantitySelected}
            </span>
          </>
        }
        onClick={() => updateCart()}
      />
    </div>
  );
}

export default App;
