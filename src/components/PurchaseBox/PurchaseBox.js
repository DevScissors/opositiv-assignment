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
        countSelected={props.countSelected}
        priceMap={props.priceMap}
      />
      <QuantityRow
        onClick={props.handleQuantityChange}
        countSelected={props.countSelected}
        purchaseType={props.purchaseTypeSelected}
      />
    </div>
  );
};

export default PurchaseBox;
