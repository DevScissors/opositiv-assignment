import React from "react";
import "./Button.module.scss";

const Button = (props) => {
  // const pinkButton = {
  //   backgroundColor: "#f37490",
  //   border: "1px solid #f37490",
  //   color: "white",
  //   borderRadius: "50px",
  //   display: "flex",
  //   justifyContent: "center",
  //   fontWeight: "700",
  //   letterSpacing: "0.6px",
  //   boxShadow: "5px 5px #fabdcc",
  //   margin: "0 50%",
  //   cursor: "pointer",
  // };
  const btnColorSwitch = (shape) => {
    switch (shape) {
      case "pink":
        return "pink";
      case "orange":
        return "orange";
      default:
        return "pink";
    }
  };
  return (
    <div className="btn-wrapper">
      <button
        className={`btn-cart-submit ${btnColorSwitch(props.color)}`}
        // style={pinkButton}
      >
        Test
      </button>
    </div>
  );
};

export default Button;
