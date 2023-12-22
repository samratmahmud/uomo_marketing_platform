import React from "react";

interface DemosCardItemProps {
  title: string;
  img: string;
}

function DemosCardItem(props: DemosCardItemProps) {
  const {title, img} = props;

  return (
    <div className="group hover:-translate-y-4 duration-500">
      <div className="mb-4">
        <img src={img} alt="" />
      </div>
      <p className="text-md font-semibold mb-10 group-hover:text-praimary">
        {title}
      </p>
    </div>
  );
}

export default DemosCardItem;
