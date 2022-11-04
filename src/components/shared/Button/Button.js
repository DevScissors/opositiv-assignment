import React from "react";

const Button = ({ onClick, classNameOverride, label, span }) => {
  return (
    <button onClick={onClick} className={classNameOverride}>
      {label}
      {span}
    </button>
  );
};

export default Button;
