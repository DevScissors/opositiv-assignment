import React from "react";
import CheckMarkIcon from "./Icons/CheckMarkIcon/CheckMarkIcon";
import QuantityIcon from "./Icons/QuantityIcon/QuantityIcon";
import CustomButton from "./Button";
import "../sass/PurchaseComponent.scss";

const PurchaseComponent = (props) => {
  return (
    <div className="purchase-component-wrapper">
      <div className="option-row-label">1. Select Option</div>
      <div className="option-row">
        <div className="option-gummies">
          Gummies: <p>Strawberry</p> <CheckMarkIcon shape={"circle"} />
        </div>
        <div className="option-capsules">
          {" "}
          Capsules: <CheckMarkIcon shape={"circle"} />
        </div>
      </div>
      <CheckMarkIcon shape={"square"} />
      <QuantityIcon />
      <CustomButton color={"pink"} />
    </div>
  );
};

export default PurchaseComponent;
