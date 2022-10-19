import React from "react";

import styles from "./OptionRow.module.scss";

const OptionRow = (props) => {
  return (
    <div className={styles["option-row-wrapper"]}>
      <label>
        <input
          className={"options-row-gummies"}
          type="checkbox"
          checked={props.checked === "gummies"}
          onChange={props.onChange}
        />
        {"Gummies"}
      </label>
      <label>
        <input
          className={"option-row-capsule"}
          type="checkbox"
          checked={props.checked === "capsule"}
          onChange={props.onChange}
        />
        {"Capsules"}
      </label>
    </div>
  );
};

export default OptionRow;
