import React from "react";
import OptionRow from "../OptionRow/OptionRow";
import PurchaseTypeRow from "../PurchaseTypeRow/PurchaseTypeRow";
import styles from "./PurchaseBox.module.scss";
import QuantityRow from "../QuantityRow/QuantityRow";

const PurchaseBox = ({
  handleOptionChange,
  handlePurchaseTypeChange,
  handleQuantityChange,
  countSelected,
  optionSelected,
  purchaseTypeSelected,
  priceMap,
}) => {
  return (
    <div className={styles["purchase-box-wrapper"]}>
      <OptionRow onChange={handleOptionChange} checked={optionSelected} />
      <PurchaseTypeRow
        onChange={handlePurchaseTypeChange}
        checked={purchaseTypeSelected}
        countSelected={countSelected}
        priceMap={priceMap}
      />
      <QuantityRow
        onClick={handleQuantityChange}
        countSelected={countSelected}
        purchaseType={purchaseTypeSelected}
      />
    </div>
  );
};

export default PurchaseBox;
