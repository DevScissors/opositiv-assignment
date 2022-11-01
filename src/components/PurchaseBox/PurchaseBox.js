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
        value={props.optionSelected}
        checked={props.checked}
      />
      <PurchaseTypeRow
        onChange={props.handlePurchaseTypeChange}
        value={props.purchaseTypeSelected}
        checked={props.checked}
        selectedQuantity={props.selectedQuantity}
      />
      <QuantityRow
        onChange={props.handleQuantityChange}
        checked={props.selectedQuantity}
        countSelected={props.countSelected}
      />
    </div>
  );
};

export default PurchaseBox;
