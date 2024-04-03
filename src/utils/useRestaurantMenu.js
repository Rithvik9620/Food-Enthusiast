import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const menu = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.959641&lng=77.717308&restaurantId=" +
        resId
    );
    const json = await menu.json();
    setResMenu(json);
  }

  return resMenu;
};

export default useRestaurantMenu;
