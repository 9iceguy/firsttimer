import React from "react";

const Button = ({ text, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="uppercase mt-6 px-8 py-4 bg-black text-white hover:bg-black/80"
    >
      {text}
    </button>
  );
};

export default Button;
