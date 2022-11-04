import React from "react";

const RadioButton = ({ label, checked, onChange, value }) => {
  return (
    <div>
      <input
        label={label}
        type="radio"
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
};

export default RadioButton;
