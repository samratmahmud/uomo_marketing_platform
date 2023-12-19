import Link from "next/link";
import React from "react";

interface DemosItemprops {
  itemName: string;
  pageNum: number;
  isActive?: boolean;
  handelClick?: () => void;
  itemIink?: string;
}

function DemosItems(props: DemosItemprops) {
  const {itemName, pageNum, isActive, handelClick, itemIink} = props;

  return (
    <Link href={`${itemIink}`} onClick={handelClick}>
      <div className="flex items-center gap-1">
        <div
          className={`text-md font-medium uppercase mb-1 ${
            isActive
              ? "text-gray-900 underline underline-offset-[6px] decoration-2 duration-300"
              : "text-gray-400"
          }`}
        >
          {itemName}
        </div>
        {pageNum && (
          <div>
            <span className="w-5 h-5 bg-praimary text-white text-[12px] rounded-full flex items-center justify-center">
              {pageNum}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}

export default DemosItems;
