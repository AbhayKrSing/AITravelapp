import React from "react";

export default function LocationCard({name, description, time, duration, cost, img}) {
  return (
    <div className="location">
      <div className="time">{duration}</div>
      <div className="location-card">
        <img src={img} /> 
        <div className="location-details">
          <h6 className="location-name">{name}</h6>
          <p>
            {description}
          </p>
          <div>⏱{time}</div>
          <div>🎟️ {cost}</div>
        </div>
      </div>
    </div>
  );
}

