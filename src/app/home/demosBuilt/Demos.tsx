"use client";
import React from "react";
import DemosItems from "./DemosItems";
import DemosAll from "./DemosAll";
import Fashion from "./Fashion";
import FoodNGrocery from "./FoodNGrocery";
import Furniture from "./Furniture";
import SportsNOutdoors from "./SportsNOutdoors";

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
      <div className="container py-20">
        <h2 className="text-6xl text-center mb-9">
          PRE-BUILT <strong>DEMOS</strong>
        </h2>
        <div className="flex justify-between gap-12 mb-[60px] px-6">
          {DemosItem.map(({itemName, pageNum, itemIink}, index) => (
            <DemosItems
              itemName={itemName}
              pageNum={pageNum}
              itemIink={itemIink}
              isActive={tab === index}
              handelClick={() => setTab(index)}
              key={index}
            />
          ))}
        </div>
        <div>{tab === 0 && <DemosAll />}</div>
        <div>{tab === 1 && <Fashion />}</div>
        <div>{tab === 2 && <Furniture />}</div>
        <div>{tab === 3 && <SportsNOutdoors />}</div>
        <div>{tab === 4 && <SportsNOutdoors />}</div>
        <div>{tab === 5 && <FoodNGrocery />}</div>
      </div>
    </section>
  );
}

export default Demos;
