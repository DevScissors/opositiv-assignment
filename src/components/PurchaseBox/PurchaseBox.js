import React, { useState } from "react";
import OptionRow from "../OptionRow/OptionRow";
import PurchaseTypeRow from "../PurchaseTypeRow/PurchaseTypeRow";
import Button from "../Button/Button";
import styles from "./PurchaseBox.module.scss";
import QuantityRow from "../QuantityRow/QuantityRow";

const PurchaseBox = () => {
  const [isOptionChecked, setIsOptionChecked] = useState("capsule");
  const [isTypeChecked, setIsTypeChecked] = useState("subscribe");
  let [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleOptionChange = () => {
    setIsOptionChecked((isChecked) => !isChecked);
  };

  const handleTypeChange = () => {
    setIsTypeChecked((isChecked) => !isChecked);
  };

  const handleQuantityChange = (checkedValue) => {
    setSelectedQuantity(checkedValue);
  };

  return (
    <div className={styles["purchase-box-wrapper"]}>
      <div className={styles["option-row-label"]}>1. Select Option</div>
      <div className={styles["option-row"]}>
        <div className={styles["options"]}>
          <OptionRow
            onChange={handleOptionChange}
            checked={isOptionChecked ? "capsule" : "gummies"}
            shape={"circle"}
          />
        </div>
      </div>
      <PurchaseTypeRow
        onChange={handleTypeChange}
        checked={isTypeChecked ? "subscribe" : "one-time"}
      />
      <QuantityRow onChange={handleQuantityChange} checked={selectedQuantity} />
      <Button color={"pink"} />
    </div>
  );
};

export default PurchaseBox;
