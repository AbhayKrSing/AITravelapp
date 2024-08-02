import React from "react";

export default function HotelRecommendation({hotels}) {

  return (
    <div className="flex-column">
      <h3>Hotel Recommendations</h3>
      <div className="recommendation-grid">

        {hotels.map((hotel) => (
          <div key={hotel.id} className="recommendation-card">
            <img src={hotel.img} />
            <div className="recommendation-card-details">
              <h4>{hotel.name}</h4>
              <div className="address">📍 {hotel.address}</div>
              <div className="price">💰 {hotel.price} per night</div>
              <div className="stars">⭐️ {hotel.stars} stars</div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}



