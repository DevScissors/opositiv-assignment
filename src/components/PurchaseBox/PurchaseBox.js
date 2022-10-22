import React, { useState } from "react";
import OptionRow from "../OptionRow/OptionRow";
import PurchaseTypeRow from "../PurchaseTypeRow/PurchaseTypeRow";
import Button from "../Button/Button";
import styles from "./PurchaseBox.module.scss";
import QuantityRow from "../QuantityRow/QuantityRow";

const PurchaseBox = () => {
  const [optionSelected, setSelectedOption] = useState("capsule");
  const [purchaseTypeSelected, setSelectedPurchaseType] = useState("subscribe");
  let [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleOptionChange = (checkedValue) => {
    setSelectedOption(checkedValue);
  };

  const handlePurchaseTypeChange = (checkedValue) => {
    setSelectedPurchaseType(checkedValue);
  };

  const handleQuantityChange = (checkedValue) => {
    setSelectedQuantity(checkedValue);
  };

  return (
    <div className={styles["purchase-box-wrapper"]}>
      <OptionRow
        onChange={handleOptionChange}
        checked={optionSelected}
        shape={"circle"}
      />
      <PurchaseTypeRow
        onChange={handlePurchaseTypeChange}
        checked={purchaseTypeSelected}
      />
      <QuantityRow onChange={handleQuantityChange} checked={selectedQuantity} />
      <Button color={"pink"} />
    </div>
  );
};

export default PurchaseBox;
