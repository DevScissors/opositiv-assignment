import React from "react";

const RadioButton = (props) => {
  return (
    <label>
      <input
        label={props.label}
        className={props.className}
        type="radio"
        checked={props.checked}
        onChange={props.onChange}
        value={props.value}
      />
      <p className={`${props.label}-label`}>{props.label}</p>
    </label>
  );
};

export default RadioButton;
