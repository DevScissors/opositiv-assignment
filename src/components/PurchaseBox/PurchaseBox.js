import React from "react";
import OptionRow from "../OptionRow/OptionRow";
import PurchaseTypeRow from "../PurchaseTypeRow/PurchaseTypeRow";
import styles from "./PurchaseBox.module.scss";
import QuantityRow from "../QuantityRow/QuantityRow";

const PurchaseBox = (props) => {
  return (
    <div className={styles["purchase-box-wrapper"]}>
      <OptionRow
        onChange={props.handleOptionChange}
        checked={props.optionSelected}
      />
      <PurchaseTypeRow
        onChange={props.handlePurchaseTypeChange}
        checked={props.purchaseTypeSelected}
        quantity={props.selectedQuantity}
        countSelected={props.countSelected}
      />
      <QuantityRow
        onClick={props.handleQuantityChange}
        quantity={props.selectedQuantity}
        countSelected={props.countSelected}
      />
    </div>
  );
};

export default PurchaseBox;
