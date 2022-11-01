import React from "react";
import OptionRow from "../OptionRow/OptionRow";
import PurchaseTypeRow from "../PurchaseTypeRow/PurchaseTypeRow";
import styles from "./PurchaseBox.module.scss";
import QuantityRow from "../QuantityRow/QuantityRow";

const PurchaseBox = (props) => {
  return (
    <div className={styles["purchase-box-wrapper"]}>
      <OptionRow
        handleOptionChange={props.handleOptionChange}
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
