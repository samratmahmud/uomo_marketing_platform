import React from "react";
import DemosCardItem from "./DemosCardItem";

const DemosAllProps = [
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
  {
    title: `Home V9 - Furniture`,
    img: "/images/home-9.png",
  },
  {
    title: `Home V10 - Sports & Outdoors`,
    img: "/images/home-10.png",
  },
  {
    title: `Home V11 - Electronics`,
    img: "/images/home-11.png",
  },
  {
    title: `Home V12 - Food & Grocery`,
    img: "/images/home-12.png",
  },
];

function DemosAll() {
  return (
    <section>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-6">
        {DemosAllProps.map(({title, img}, index) => (
          <DemosCardItem title={title} img={img} key={index} />
        ))}
      </div>
    </section>
  );
}

export default DemosAll;
