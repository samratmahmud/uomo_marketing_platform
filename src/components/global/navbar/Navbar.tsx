import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";

const navLink = [
  {
    name: "Demos",
    link: "/",
  },
  {
    name: "Shop",
    link: "/",
  },
  {
    name: "Detail",
    link: "/",
  },
  {
    name: "Headers",
    link: "/",
  },
  {
    name: "Features",
    link: "/",
  },
];

function Navbar() {
  return (
    <nav className="fixed left-0 right-0">
      <div className="container flex items-center justify-between py-5">
        <div className="flex items-center gap-7">
          <div>
            <img src="/images/logo.png" alt="" />
          </div>
          <div className="flex gap-10">
            {navLink.map(({link, name}, index) => (
              <Link
                href={link}
                key={index}
                className="text-xs uppercase text-white"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Button name="Purchase Theme" amount="$15" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
