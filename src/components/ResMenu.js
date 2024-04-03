import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";

const ResMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);

  const [showItemList, setShowItemList] = useState(0);

  if (resMenu === null) return <Shimmer />;

  const fullMenu =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  const categories =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">
        {resMenu?.data?.cards[0]?.card?.card?.info?.name}
      </h1>
      <h2 className="font-bold text-xl">Menu</h2>
      {categories.map((category, index) => (
        <ResCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItemList={index === showItemList ? true : false}
          setShowItemList={() => setShowItemList(index)}
        />
      ))}
    </div>
  );
};

export default ResMenu;
