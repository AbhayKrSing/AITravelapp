import React from "react";

export default function HotelRecommendation({ hotels }) {
  let temp = hotels;
  if (hotels.length > 4) {
    temp = hotels.slice(0, 4);
  }

  return (
    <div className="flex-column">
      <h3>Hotel Recommendations</h3>
      <div className="recommendation-grid">
        {temp.map((hotel, idx) => (
          <div key={idx} className="recommendation-card">
            <img src={hotel_img[idx]} />
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

const hotel_img = [
  "https://media.istockphoto.com/id/627892060/photo/hotel-room-suite-with-view.webp?b=1&s=170667a&w=0&k=20&c=ACTrbgcFEKcD5T4bU2eKpVwI-TIinWDEJC_G3EFz5Fw=",
  "https://plus.unsplash.com/premium_photo-1678297270523-8775c817d0b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1512918580421-b2feee3b85a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlZHJvb218ZW58MHx8MHx8fDA%3D",
];
