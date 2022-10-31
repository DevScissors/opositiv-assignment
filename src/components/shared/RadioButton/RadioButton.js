import React from "react";

const RadioButton = (props) => {
  return (
    <div>
      <input
        label={props.label}
        type="radio"
        checked={props.checked}
        onChange={props.onChange}
        value={props.value}
      />
      <label for={props.value}>{props.label}</label>
    </div>
  );
};

export default RadioButton;
