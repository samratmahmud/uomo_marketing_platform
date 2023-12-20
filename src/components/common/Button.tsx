import React from "react";

interface buttonProps {
  name: string;
  amount: string;
  Theme?: "red" | "white";
}

function Button(props: buttonProps) {
  const {name, amount, Theme = "white"} = props;
  return (
    <div
      className={`text-xs font-medium uppercase p-2.5 pl-3.5 ${
        Theme === "white" ? "bg-white text-praimary" : "bg-praimary text-white"
      }`}
    >
      {name}
      <span className="leading-7 text-praimary bg-white px-2.5 py-[5px] ml-4 border border-praimary">
        {amount}
      </span>
    </div>
  );
}

export default Button;
