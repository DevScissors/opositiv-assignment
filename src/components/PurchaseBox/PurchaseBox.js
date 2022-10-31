import React, { useState } from "react";
import OptionRow from "../OptionRow/OptionRow";
import PurchaseTypeRow from "../PurchaseTypeRow/PurchaseTypeRow";
import styles from "./PurchaseBox.module.scss";
import QuantityRow from "../QuantityRow/QuantityRow";

const PurchaseBox = (props) => {
  // const [optionSelected, setSelectedOption] = useState("capsule");
  // const [purchaseTypeSelected, setSelectedPurchaseType] = useState("subscribe");
  // let [selectedQuantity, setSelectedQuantity] = useState(1);

  // const handleOptionChange = (checkedValue) => {
  //   setSelectedOption(checkedValue.target.value);
  // };

  // const handlePurchaseTypeChange = (checkedValue) => {
  //   setSelectedPurchaseType(checkedValue.target.value);
  // };

  // const handleQuantityChange = (checkedValue) => {
  //   setSelectedQuantity(checkedValue);
  // };

  return (
    <div className={styles["purchase-box-wrapper"]}>
      <OptionRow
        onChange={props.handleOptionChange}
        value={props.optionSelected}
        checked={props.optionSelected}
      />
      <PurchaseTypeRow
        onChange={props.handlePurchaseTypeChange}
        value={props.purchaseTypeSelected}
        checked={props.purchaseTypeSelected}
        selectedQuantity={props.selectedQuantity}
      />
      <QuantityRow
        onChange={props.handleQuantityChange}
        checked={props.selectedQuantity}
      />
    </div>
  );
};

export default PurchaseBox;
