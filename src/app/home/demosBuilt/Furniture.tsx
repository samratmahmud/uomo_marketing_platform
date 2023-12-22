import React from "react";
import Demos from "./Demos";
import DemosCardItem from "./DemosCardItem";

const DemosFurnitureProps = [
  {
    title: `Home V9 - Furniture`,
    img: "/images/home-9.png",
  },
];

function Furniture() {
  return (
    <section>
      <div className="grid grid-cols-3 gap-x-6">
        {DemosFurnitureProps.map(({title, img}, index) => (
          <DemosCardItem title={title} img={img} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Furniture;
