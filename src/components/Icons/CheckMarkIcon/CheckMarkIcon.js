import React from "react";

import "../../../sass/CheckMarkIcon.scss";

const CheckMarkIcon = (props) => {
  const checkMarkColorSwitch = (shape) => {
    switch (shape) {
      case "circle":
        return <input type="checkbox" className="circle-check"></input>;
      case "square":
        return <input type="checkbox" className="square-check"></input>;
      default:
        return <input type="checkbox" className="circle-check"></input>;
    }
  };

  return (
    <div className="check-mark-icon-wrapper">
      {checkMarkColorSwitch(props.shape)}
    </div>
  );
};

export default CheckMarkIcon;
