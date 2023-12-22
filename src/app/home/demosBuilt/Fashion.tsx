import React from "react";
import DemosCardItem from "./DemosCardItem";

const DemosFashionProps = [
  {
    title: `Home V1 - Fashion`,
    img: "/images/home-1.png",
  },
  {
    title: `Home V2 - Fashion`,
    img: "/images/home-2.png",
  },
  {
    title: `Home V3 - Fashion`,
    img: "/images/home-3.png",
  },
  {
    title: `Home V4 - Fashion`,
    img: "/images/home-4.png",
  },
  {
    title: `Home V5 - Fashion`,
    img: "/images/home-5.png",
  },
  {
    title: `Home V6 - Fashion`,
    img: "/images/home-6.png",
  },
  {
    title: `Home V7 - Fashion`,
    img: "/images/home-7.png",
  },
  {
    title: `Home V8 - Fashion`,
    img: "/images/home-8.png",
  },
];

function Fashion() {
  return (
    <section>
      <div className="grid grid-cols-3 gap-x-6">
        {DemosFashionProps.map(({title, img}, index) => (
          <DemosCardItem title={title} img={img} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Fashion;
