import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, showItemList, setShowItemList }) => {
  function handleClick() {
    setShowItemList();
  }

  return (
    <div className="w-6/12 mx-auto my-4 shadow-lg bg-gray-100 p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg ml-4">
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span>&#709;</span>
      </div>
      {showItemList && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default ResCategory;
