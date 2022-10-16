import React from "react";
import CheckMarkIcon from "../Icons/CheckMarkIcon/CheckMarkIcon";
import QuantityIcon from "../Icons/QuantityIcon/QuantityIcon";
import Button from "../Button/Button";
import "./PurchaseBox.module.scss";

const PurchaseBox = (props) => {
  return (
    <div className="purchase-box-wrapper">
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
      <Button color={"pink"} />
    </div>
  );
};

export default PurchaseBox;
