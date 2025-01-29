import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = ({ resData }) => {
  const { info } = resData;
 
  return (
    <div className="restaurant-card">
      <img
  className="restaurant-card__image"
  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`}
  alt="res-logo"

/>
      <div className="restaurant-card__content">
        <h3 className="restaurant-card__title">{info.name}</h3>
        <p className="restaurant-card__cuisine">{info.cuisines.join(', ')}</p>
        <p className="restaurant-card__rating">{info.avgRating} ⭐</p>
        <p className="restaurant-card__cost">{info.costForTwo}</p>
        <p className="restaurant-card__distance">{info.sla.lastMileTravelString}</p>
        <p className="restaurant-card__time">{info.sla.slaString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;