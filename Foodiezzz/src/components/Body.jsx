/* eslint-disable react/prop-types */
/* eslint-disable no-unsafe-optional-chaining */
import { useState } from "react";
import { restaurants, Restaurants_pic } from "../config";

const FilterData = (Search, res) => {
  const filterData = res.filter((e) =>
    e.info.name.toLowerCase().includes(Search.toLowerCase())
  );
  return filterData;
};

const ResCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, areaName, costForTwo } =
    resData?.info;
  return (
    <div className="res-card">
      <img src={Restaurants_pic + cloudinaryImageId} alt={name} />
      <h2 className="res-name">{name}</h2>
      <h3 className="res-cuisine">{cuisines.join(", ")}</h3>
      <h3 className="res-rating">{avgRating}</h3>
      <h3 className="res-location">{areaName}</h3>
      <h3 className="res-cost">{costForTwo}</h3>
    </div>
  );
};

const Body = () => {
  const [Search, setSearch] = useState("");
  const [res, setRes] = useState(restaurants);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearch(input);
    setRes(FilterData(input, restaurants));
  };

  return (
    <div className="body">
      <div className="search">
        <input
          className="search-txt"
          type="text"
          placeholder="Dynamic Search"
          value={Search}
          onChange={handleInputChange}
        />
        {/* <button
          className="search-btn"
          onClick={() => {
            const data = FilterData(Search, res);
            setRes(data); // Use restaurants array for filtering
          }}
        >
          Search
        </button> */}
      </div>

      <div className="res-container">
        {res.length > 0 ? (
          //manually=>     <ResCard resData={res[0]} />
          res.map((res) => <ResCard resData={res} key={res.info.id} />)
        ) : (
          <p>No results found</p> // Display a message if no results match
        )}
      </div>
    </div>
  );
};

export default Body;
