import React from "react";
import DemosCardItem from "./DemosCardItem";

const DemosAllProps = [
  {
    title: `Home V10 - Sports & Outdoors`,
    img: "/images/home-10.png",
  },
];

function SportsNOutdoors() {
  return (
    <section>
      <div className="grid grid-cols-3 gap-x-6">
        {DemosAllProps.map(({title, img}, index) => (
          <DemosCardItem title={title} img={img} key={index} />
        ))}
      </div>
    </section>
  );
}

export default SportsNOutdoors;
