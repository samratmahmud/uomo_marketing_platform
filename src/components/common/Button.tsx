import React from "react";

interface buttonProps {
  name: string;
  amount: string;
}

function Button(props: buttonProps) {
  const {name, amount} = props;
  return (
    <div className="text-xs font-medium text-white uppercase bg-praimary p-2.5">
      {name}
      <span className="leading-7 text-praimary bg-white px-2.5 py-1 ml-4">
        {amount}
      </span>
    </div>
  );
}

export default Button;
