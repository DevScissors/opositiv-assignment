import React from "react";

const SectionRow = (props) => {
  return (
    <div className={`section-row-wrapper ${props.sectionTitle}`}>
      {props.children}
      <div className={`section-options-wrapper ${props.sectionTitle}`}>
        {props.children}
      </div>
    </div>
  );
};

export default SectionRow;
