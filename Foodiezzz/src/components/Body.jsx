/* eslint-disable react/prop-types */
/* eslint-disable no-unsafe-optional-chaining */
import { useState } from "react";
import { restaurants, Restaurants_pic } from "../config";

const ResCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, areaName, costForTwo } =
    resData?.info;
  return (
    <div className="res-card">
      <img src={Restaurants_pic + cloudinaryImageId} />
      <h2 className="res-name">{name}</h2>
      <h3 className="res-cuisine">{cuisines.join(", ")}</h3>
      <h3 className="res-rating">{avgRating}</h3>
      <h3 className="res-location">{areaName}</h3>
      <h3 className="res-location">{costForTwo}</h3>
    </div>
  );
};

const Body = () => {
  const [Search, setSearch] = useState("");
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="body">
      <div className="search">
        <input
          className="search-txt"
          type="text"
          placeholder="Search"
          value={Search}
          onChange={handleInputChange}
        />
        <button className="search-btn">Search</button>
      </div>

      <div className="res-container">
        {restaurants.map((restaurants) => (
          <ResCard resData={restaurants} key={restaurants.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
