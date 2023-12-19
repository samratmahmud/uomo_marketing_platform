import React from "react";

interface buttonProps {
  name: string;
  amount: string;
}

function Button(props: buttonProps) {
  const {name, amount} = props;
  return (
    <div className="text-xs font-medium text-praimary uppercase bg-white p-2.5">
      {name}
      <span className="leading-7 text-praimary bg-white px-2.5 py-[5px] ml-4 border border-praimary">
        {amount}
      </span>
    </div>
  );
}

export default Button;
