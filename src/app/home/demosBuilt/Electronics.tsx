import React from "react";
import DemosCardItem from "./DemosCardItem";

const DemosAllProps = [
  {
    title: `Home V11 - Electronics`,
    img: "/images/home-11.png",
  },
];

function Electronics() {
  return (
    <section>
      <div className="grid grid-cols-3 gap-6">
        {DemosAllProps.map(({title, img}, index) => (
          <DemosCardItem title={title} img={img} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Electronics;
