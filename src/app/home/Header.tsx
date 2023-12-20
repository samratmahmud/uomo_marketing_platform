import Button from "@/components/common/Button";
import Link from "next/link";
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
      <div className="container lg:pt-[200px] lg:pb-[60px] pb-8 flex flex-col lg:flex-row items-center justify-center lg:gap-8 gap-6">
        <div>
          <div className="xl:text-7xl text-5xl text-white lg:mb-[60px] mb-6 text-center lg:text-left">
            <h1 className="mb-2.5">MODERN & MULTI-CONCEPT</h1>
            <h2 className="font-semibold">HTML TEMPLATE</h2>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start lg:gap-10 gap-5">
            {pageDetails.map(({title, items}, index) => (
              <div
                key={index}
                className="flex flex-col items-center lg:items-start"
              >
                <h1 className="text-4xl font-medium text-white mb-1.5">
                  {items}
                </h1>
                <p className="md:text-sm text-xs font-medium text-white">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Link href="/" className="lg:hidden">
          <Button Theme="red" name="Purchase Theme" amount="$15" />
        </Link>
        <div className="w-[50%] hidden lg:inline">
          <img src="/images/header.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Header;
