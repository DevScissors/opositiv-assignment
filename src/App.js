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

  const count = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
  };

  const itemName = {
    CAPSULE: "capsule",
    GUMMIES: "gummies",
  };

  const [optionSelected, setSelectedOption] = useState(itemName.CAPSULE);
  const [purchaseTypeSelected, setSelectedPurchaseType] = useState(
    purchaseType.SUBSCRIPTION
  );
  const [selectedQuantity, setSelectedQuantity] = useState(
    priceByPurchaseTypeAndQuantity[purchaseType.SUBSCRIPTION][1]
  );
  const [countSelected, setCount] = useState(count.ONE);

  const handleOptionChange = (checkedValue) => {
    setSelectedOption(checkedValue.target.checked);
  };

  const handlePurchaseTypeChange = (checkedValue) => {
    setSelectedPurchaseType(checkedValue.target.value);
  };

  const handleQuantityChange = (countSelected) => {
    setSelectedQuantity(countSelected);
  };

  const handleCountSelected = () => {
    setCount(count);
  };

  return (
    <div className={styles.App}>
      <PurchaseBox
        optionSelected={optionSelected}
        purchaseTypeSelected={purchaseTypeSelected}
        selectedQuantity={selectedQuantity}
        countSelected={countSelected}
        handleOptionChange={handleOptionChange}
        handlePurchaseTypeChange={handlePurchaseTypeChange}
        handleQuantityChange={handleQuantityChange}
        handleCountSelected={handleCountSelected}
      />
      <Button
        classNameOverride={styles["btn-cart-submit"]}
        label={`ADD TO CART - ${selectedQuantity}`}
      />
    </div>
  );
}

export default App;
