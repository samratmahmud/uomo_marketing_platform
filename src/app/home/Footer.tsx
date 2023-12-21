import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <section className="bg-gray-900 xl:pt-[100px] xl:pb-12 py-8">
      <div className="container">
        <div className="flex justify-center xl:mb-11 mb-5">
          <img src="/images/logo.png" alt="" />
        </div>
        <h2 className="xl:text-6xl md:text-3xl text-lg text-white text-center xl:mb-8 mb-5 leading-tight">
          PURCHASE THE SOBER NOW AND
        </h2>
        <h3 className="xl:text-6xl md:text-3xl text-lg text-white text-center font-semibold xl:mb-[60px] mb-8">
          MAKE EVERYTHING EASIER
        </h3>
        <Link href="/" className="xl:mb-[60px] mb-8 flex justify-center">
          <Button Theme="red" name="Purchase Theme" amount="$15" />
        </Link>
        <div className="text-xs text-white text-center">
          Powered By Made with love by Flexkit
        </div>
      </div>
    </section>
  );
}

export default Footer;
