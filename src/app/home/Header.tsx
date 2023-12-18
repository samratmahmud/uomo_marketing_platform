import React from "react";

const pageDetails = [
  {
    title: "HOME PAGES",
    items: "12",
  },
  {
    title: "SHOP PAGES",
    items: "10+",
  },
  {
    title: "PRODUCT PAGES",
    items: "11+",
  },
  {
    title: "HEADER STYLES",
    items: "12+",
  },
];

function Header() {
  return (
    <section>
      <div className="container pt-[200px] pb-[60px] flex items-center gap-8">
        <div>
          <div className="text-7xl font-semibold text-white mb-[60px]">
            <h1>MODERN & MULTI-CONCEPT</h1>
            <h2>HTML TEMPLATE</h2>
          </div>
          <div className="flex gap-10">
            {pageDetails.map(({title, items}, index) => (
              <div key={index}>
                <h1 className="text-4xl font-medium text-white mb-1.5">
                  {items}
                </h1>
                <p className="text-sm font-medium text-white">{title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[50%]">
          <img src="/images/header.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Header;
