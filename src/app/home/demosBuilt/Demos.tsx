"use client";
import React from "react";
import DemosItems from "./DemosItems";
import DemosAll from "./DemosAll";
import Fashion from "./Fashion";
import FoodNGrocery from "./FoodNGrocery";
import Furniture from "./Furniture";
import SportsNOutdoors from "./SportsNOutdoors";
import Electronics from "./Electronics";

const DemosItem = [
  {
    itemName: "All",
    pageNum: 12,
    itemIink: "#demos",
  },
  {
    itemName: "Fashion",
    pageNum: 8,
    itemIink: "#demos",
  },
  {
    itemName: "Furniture",
    pageNum: 1,
    itemIink: "#demos",
  },
  {
    itemName: "Sport & Outdoors",
    pageNum: 1,
    itemIink: "#demos",
  },
  {
    itemName: "Electronics",
    pageNum: 1,
    itemIink: "#demos",
  },
  {
    itemName: "Food & Grocery",
    pageNum: 1,
    itemIink: "#demos",
  },
];

function Demos() {
  const [tab, setTab] = React.useState(0);

  return (
    <section id="demos" className="bg-white">
      <div className="container xl:pt-20 pt-10 xl:pb-10 pb-7">
        <h2 className="xl:text-6xl text-3xl text-center xl:mb-9 mb-7">
          PRE-BUILT <strong>DEMOS</strong>
        </h2>
        <div className="flex flex-wrap justify-center xl:justify-between md:gap-x-12 gap-x-5 md:gap-y-5 gap-y-2.5 mb-[60px] md:px-6 px-2.5">
          {DemosItem.map(({itemName, pageNum, itemIink}, index) => (
            <DemosItems
              key={index}
              itemName={itemName}
              pageNum={pageNum}
              itemIink={itemIink}
              isActive={tab === index}
              handelClick={() => setTab(index)}
            />
          ))}
        </div>
        <div>{tab === 0 && <DemosAll />}</div>
        <div>{tab === 1 && <Fashion />}</div>
        <div>{tab === 2 && <Furniture />}</div>
        <div>{tab === 3 && <SportsNOutdoors />}</div>
        <div>{tab === 4 && <Electronics />}</div>
        <div>{tab === 5 && <FoodNGrocery />}</div>
      </div>
    </section>
  );
}

export default Demos;
