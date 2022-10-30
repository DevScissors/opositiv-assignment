import React from "react";

const SectionHeader = (props) => {
  return (
    <div className={`section-header-wrapper ${props.sectionTitle}`}>
      {props.children}
    </div>
  );
};

export default SectionHeader;
