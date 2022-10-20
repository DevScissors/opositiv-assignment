import React from "react";

import styles from "./QuantityRow.module.scss";

const QuantityRow = (props) => {
  return (
    <div className={styles["quantity-row-wrapper"]}>
      1
      <input
        className={"quantity-row-opt1"}
        type="checkbox"
        checked={props.checked === 1}
        onChange={() => props.onChange(1)}
      />
      2
      <input
        className={"quantity-row-opt2"}
        type="checkbox"
        checked={props.checked === 2}
        onChange={() => props.onChange(2)}
      />
      3
      <input
        className={"quantity-row-opt3"}
        type="checkbox"
        checked={props.checked === 3}
        onChange={() => props.onChange(3)}
      />
      {console.log("Props check " + props.checked)}
    </div>
  );
};

export default QuantityRow;
