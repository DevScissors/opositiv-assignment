import React from "react";
import SectionHeader from "../shared/Sections/SectionHeader/SectionHeader";
import SectionOption from "../shared/Sections/SectionOption/SectionOption";
import SectionRow from "../shared/Sections/SectionRow/SectionRow";
import RadioButton from "../shared/RadioButton/RadioButton";

import styles from "./OptionRow.module.scss";

const OptionRow = (props) => {
  return (
    <div className={styles["option-row-wrapper"]}>
      <SectionRow sectionTitle="option-row">
        <SectionHeader
          sectionNumber="1."
          sectionTitle="option"
          sectionLabel="Select Option"
        />
        <div className={styles["option-row-options"]}>
          <SectionOption>
            <div className={styles["option-row-gummies-content"]}>
              <div>
                <form>
                  <div className={styles["option-row-gummies-checkbox-row"]}>
                    <RadioButton
                      label="Gummies"
                      className={styles["option-row-gummies"]}
                      type="radio"
                      checked={props.checked === "gummies"}
                      onChange={props.onChange}
                      value="gummies"
                    />
                  </div>
                </form>
              </div>
              <p className={styles["option-row-gummies-description"]}>
                Strawberry
              </p>
            </div>
          </SectionOption>
          <SectionOption>
            <div className={styles["option-row-capsule-content"]}>
              <div>
                <form>
                  <div className={styles["option-row-capsule-checkbox-row"]}>
                    <RadioButton
                      label="Capsule"
                      className={styles["option-row-capsule"]}
                      type="radio"
                      checked={props.checked === "capsule"}
                      onChange={props.onChange}
                      value="capsule"
                    />
                  </div>
                </form>
              </div>
              <p className={styles["option-row-capsule-description"]}>
                Sugar-Free
              </p>
            </div>
          </SectionOption>
        </div>
      </SectionRow>
    </div>
  );
};

export default OptionRow;

// import React from "react";
// import RadioButton from "../shared/RadioButton/RadioButton";

// import styles from "./OptionRow.module.scss";

// const OptionRow = (props) => {
//   return (
//     <div>
//       <div className={styles["option-row-header-wrapper"]}>
//         <p className={styles["option-row-number"]}>1.</p>
//         <p>Select Option</p>
//       </div>
//       <div className={styles["option-row-options"]}>
//         <div className={styles["option-row-gummies-content"]}>
//           <div>
//             <form>
//               <div className={styles["option-gummies-radio-row"]}>
//                 <RadioButton
//                   label="Gummies"
//                   className={styles["option-row-gummies"]}
//                   type="radio"
//                   checked={props.checked === "gummies"}
//                   onChange={props.onChange}
//                   value="gummies"
//                 />
//               </div>
//             </form>
//           </div>
//           <p className={styles["option-row-gummies-description"]}>Strawberry</p>
//         </div>
//         <div className={styles["option-row-capsule-content"]}>
//           <div>
//             <form>
//               <div className={styles["option-capsule-radio-row"]}>
//                 <RadioButton
//                   label="Capsule"
//                   className={styles["option-row-capsule"]}
//                   type="radio"
//                   checked={props.checked === "capsule"}
//                   onChange={props.onChange}
//                   value="capsule"
//                 />
//               </div>
//             </form>
//           </div>
//           <p className={styles["option-row-capsule-description"]}>Sugar-Free</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OptionRow;
