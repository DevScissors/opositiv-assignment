import React, { useState } from "react";
import OptionRow from "../OptionRow/OptionRow";
import PurchaseTypeRow from "../PurchaseTypeRow/PurchaseTypeRow";
import Button from "../Button/Button";
import styles from "./PurchaseBox.module.scss";
import QuantityRow from "../QuantityRow/QuantityRow";

const PurchaseBox = () => {
  const QUANTITIES = ["opt1", "opt2", "opt3"];

  const [isOptionChecked, setIsOptionChecked] = useState("capsule");
  const [isTypeChecked, setIsTypeChecked] = useState("subscribe");
  const [isQuantityChecked, setIsQuantityChecked] = useState(QUANTITIES[1]);

  const handleOptionChange = () => {
    setIsOptionChecked((isChecked) => !isChecked);
  };

  const handleTypeChange = () => {
    setIsTypeChecked((isChecked) => !isChecked);
  };

  const handleQuantityChange = () => {
    setIsQuantityChecked((isChecked) => !isChecked);
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
      <QuantityRow
        onChange={handleQuantityChange}
        checked={
          isQuantityChecked
            ? QUANTITIES[1]
            : QUANTITIES[2]
            ? QUANTITIES[2]
            : QUANTITIES[3]
        }
      />
      <Button color={"pink"} />
    </div>
  );
};

export default PurchaseBox;
