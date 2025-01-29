import React, { useState } from 'react';
import './Body.css';
import RestaurantCard from './ResturantCard';
import resData from '../utils/mockData';

function Body() {
  const [restaurantList, setRestaurantList] = useState(resData.restaurants); 
  console.log(restaurantList)
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setRestaurantList(filtered); 
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-list">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;


  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   try {
  //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5825273&lng=77.3690496&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //     if (!data.ok) {
  //       throw new Error("Failed to fetch data");
  //     }
  //     const json = await data.json();
  //     console.log(json);
  //     setRestaurantList(json.data)

  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };