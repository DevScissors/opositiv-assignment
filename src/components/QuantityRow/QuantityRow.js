import React from "react";

import styles from "./QuantityRow.module.scss";

const QuantityRow = (props) => {
  return (
    <div className={styles["quantity-row-wrapper"]}>
      <p className="quantity-row-number">3.</p>
      <p className="quantity-row-label">Quantity</p>
      <input
        className={"quantity-row-opt1"}
        type="checkbox"
        checked={props.checked === 1}
        onChange={() => props.onChange(1)}
        value={1}
      />
      <label>1</label>
      <input
        className={"quantity-row-opt2"}
        type="checkbox"
        checked={props.checked === 2}
        onChange={() => props.onChange(2)}
        value={2}
      />
      <label>2</label>
      <input
        className={"quantity-row-opt3"}
        type="checkbox"
        checked={props.checked === 3}
        onChange={() => props.onChange(3)}
        value={3}
      />
      <label>3</label>
    </div>
  );
};

export default QuantityRow;
