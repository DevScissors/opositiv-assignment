import React from "react";

import styles from "./OptionRow.module.scss";

const OptionRow = (props) => {
  return (
    <>
      <div className={styles["option-row-header-wrapper"]}>
        <p className={styles["option-row-number"]}>1.</p>
        <p className={styles["option-row-label"]}>Select Option</p>
      </div>
      <div className={styles["option-row-options"]}>
        <div className={styles["option-row-gummies-content"]}>
          <div className={styles["option-row-gummies-checkbox"]}>
            <div>
              <input
                className={"options-row-gummies"}
                type="checkbox"
                checked={props.checked === "gummies"}
                onChange={() => props.onChange("gummies")}
              />
            </div>
            <label className={styles["option-row-gummies-label"]}>
              <p>Gummies</p>
            </label>
          </div>
          <p className={styles["option-row-gummies-description"]}>Strawberry</p>
        </div>
        <div>
          <label>
            <input
              className={"option-row-capsule"}
              type="checkbox"
              checked={props.checked === "capsule"}
              onChange={() => props.onChange("capsule")}
            />
          </label>
          <p>Capsule</p>
          <p>Sugar-Free</p>
        </div>
      </div>
    </>
  );
};

export default OptionRow;
