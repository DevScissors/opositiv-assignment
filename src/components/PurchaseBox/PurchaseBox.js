import React, { useState } from "react";
import OptionRow from "../OptionRow/OptionRow";
import PurchaseTypeRow from "../PurchaseTypeRow/PurchaseTypeRow";
import Button from "../shared/Button/Button";
import styles from "./PurchaseBox.module.scss";
import QuantityRow from "../QuantityRow/QuantityRow";

const PurchaseBox = () => {
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
    setSelectedQuantity(checkedValue.target.value);
  };

  return (
    <div className={styles["purchase-box-wrapper"]}>
      <OptionRow
        onChange={handleOptionChange}
        value={optionSelected}
        checked={optionSelected}
      />
      <PurchaseTypeRow
        onChange={handlePurchaseTypeChange}
        value={purchaseTypeSelected}
        checked={purchaseTypeSelected}
      />
      <QuantityRow onChange={handleQuantityChange} checked={selectedQuantity} />
      <Button color="pink" />
    </div>
  );
};

export default PurchaseBox;
