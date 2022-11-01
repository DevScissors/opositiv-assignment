import React, { useState } from "react";
import PurchaseBox from "./components/PurchaseBox/PurchaseBox";
import Button from "./components/shared/Button/Button";

import styles from "./App.module.scss";

function App() {
  const purchaseType = {
    SUBSCRIPTION: "Subscription (every month)",
    ONE_TIME: "One time",
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

  const itemName = {
    CAPSULE: "FLO - PMS Vitamin Capsule",
    GUMMIES: "FLO - PMS Gummy Vitamins",
  };

  const [optionSelected, setSelectedOption] = useState(itemName.CAPSULE);
  const [purchaseTypeSelected, setSelectedPurchaseType] = useState(
    purchaseType.SUBSCRIPTION
  );
  const [selectedQuantity, setSelectedQuantity] = useState(
    priceByPurchaseTypeAndQuantity[purchaseType.SUBSCRIPTION][1]
  );

  const handleOptionChange = (checkedValue) => {
    setSelectedOption(checkedValue.target.value);
  };

  const handlePurchaseTypeChange = (checkedValue) => {
    setSelectedPurchaseType(checkedValue.target.value);
  };

  const handleQuantityChange = (checkedValue) => {
    setSelectedQuantity(checkedValue);
  };

  return (
    <div className={styles.App}>
      <PurchaseBox
        optionSelected={optionSelected}
        purchaseTypeSelected={purchaseTypeSelected}
        selectedQuantity={selectedQuantity}
        handleOptionChange={handleOptionChange}
        handlePurchaseTypeChange={handlePurchaseTypeChange}
        handleQuantityChange={handleQuantityChange}
      />
      <Button
        classNameOverride={styles["btn-cart-submit"]}
        label={`ADD TO CART - ${selectedQuantity}`}
      />
    </div>
  );
}

export default App;
