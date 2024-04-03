import useOnlineStatus from "../utils/useOnlineStatus";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9066841&lng=77.6757011&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return <h1>Looks like you are OFFLINE!!</h1>;
  }

  if (listOfRestaurants.length === 0) {
    return (
      <>
        <div className="container"></div>
        <Shimmer />
      </>
    );
  }

  return (
    <div className="body">
      <div className="filter p-4 m-4">
        <input
          className="search-box border border-solid border-black"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="bg-green-200 px-4 py-1 m-4 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            const updatedResList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestaurant(updatedResList);
          }}
          className="filter-btn px-4 py-1 bg-gray-100 rounded-lg"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            className="header-link"
            to={"/restaurants/" + restaurant.info.id}
          >
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
