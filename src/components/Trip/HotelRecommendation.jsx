import React from "react";

export default function HotelRecommendation({hotels}) {

  return (
    <div className="flex-column">
      <h3>Hotel Recommendations</h3>
      <div className="recommendation-grid">

        {hotels.map((hotel, idx) => (
          <div key={idx} className="recommendation-card">
            <img src={"https://plus.unsplash.com/premium_photo-1678297270523-8775c817d0b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsfGVufDB8fDB8fHww"} />
            {/* <img src={hotel.hotelImageUrl} /> */}
            <div className="recommendation-card-details">
              <h4>{hotel.hotelName}</h4>
              <div className="address">📍 {hotel.hotelAddress}</div>
              <div className="price">💰 {hotel.price}</div>
              <div className="stars">⭐️ {hotel.rating} stars</div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}



