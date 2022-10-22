import React from "react";

import styles from "./OptionRow.module.scss";

const OptionRow = (props) => {
  return (
    <div>
      <div className={styles["option-row-header-wrapper"]}>
        <p className={styles["option-row-number"]}>1.</p>
        <p>Select Option</p>
      </div>
      <div className={styles["option-row-options"]}>
        <div className={styles["option-row-gummies-content"]}>
          <div>
            <form>
              <div className={styles["option-row-gummies-checkbox-row"]}>
                <input
                  className={styles["option-row-gummies"]}
                  type="checkbox"
                  checked={props.checked === "gummies"}
                  onChange={() => props.onChange("gummies")}
                />
                <label className={styles["option-row-gummies-label-wrapper"]}>
                  <p className={styles["option-row-gummies-label"]}>Gummies</p>
                </label>
              </div>
            </form>
          </div>
          <p className={styles["option-row-gummies-description"]}>Strawberry</p>
        </div>
        <div className={styles["option-row-capsule-content"]}>
          <div>
            <form>
              <div className={styles["option-row-capsule-checkbox-row"]}>
                <input
                  className={styles["option-row-capsule"]}
                  type="checkbox"
                  checked={props.checked === "capsule"}
                  onChange={() => props.onChange("capsule")}
                />
                <label className={styles["option-row-capsule-label-wrapper"]}>
                  <p className={styles["option-row-capsule-label"]}>Capsule</p>
                </label>
              </div>
            </form>
          </div>
          <p className={styles["option-row-capsule-description"]}>Sugar-Free</p>
        </div>
      </div>
    </div>
  );
};

export default OptionRow;
