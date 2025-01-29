import React, { useEffect, useState } from 'react';
import './Body.css';
import RestaurantCard from './ResturantCard';

function Body() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [originalList, setOriginalList] = useState([]); // Store original list for reset
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5825273&lng=77.3690496&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      const allRestaurants = json?.data?.cards
        ?.map((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        ?.filter((res) => res !== undefined)
        ?.flat();
        console.log(allRestaurants)

      if (allRestaurants) {
        setRestaurantList(allRestaurants);
        setOriginalList(allRestaurants); 
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = originalList.filter((res) => res.info.avgRating > 3);
            setRestaurantList(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => setRestaurantList(originalList)} // Reset list
        >
          Show All
        </button>
      </div>

      <div className="restaurant-list">
        {restaurantList.length > 0 ? (
          restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </div>
    </div>
  );
}

export default Body;
