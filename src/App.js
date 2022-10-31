import React, { useState } from "react";
import PurchaseBox from "./components/PurchaseBox/PurchaseBox";
import Button from "./components/shared/Button/Button";

import styles from "./App.module.scss";

function App(props) {
  const [optionSelected, setSelectedOption] = useState("capsule");
  const [purchaseTypeSelected, setSelectedPurchaseType] = useState("subscribe");
  let [selectedQuantity, setSelectedQuantity] = useState(1);

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
        classNameOverride="btn-cart-submit"
        label={`ADD TO CART ${selectedQuantity}`}
        color="pink"
      />
    </div>
  );
}

export default App;
