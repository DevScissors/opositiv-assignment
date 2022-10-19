import React from "react";

import styles from "./QuantityRow.module.scss";

const QuantityRow = (props) => {
  return (
    <div className={styles["quantity-row-wrapper"]}>
      {"1"}
      <input
        className={"quantity-row-opt1"}
        type="checkbox"
        checked={props.checked === "opt1"}
        onChange={props.onChange}
      />
      {"2"}
      <input
        className={"quantity-row-opt2"}
        type="checkbox"
        checked={props.checked === "opt2"}
        onChange={props.onChange}
      />
      {"3"}
      <input
        className={"quantity-row-opt3"}
        type="checkbox"
        checked={props.checked === "opt3"}
        onChange={props.onChange}
      />
    </div>
  );
};

export default QuantityRow;
