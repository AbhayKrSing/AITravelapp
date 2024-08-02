import React from "react";
import LocationCard from "./LocationCard";

export default function DayPlan({day}) {
  
  return (
    <div>
      <h3>Day 1 : {day.area}</h3>
      <div className="schedule-grid">
        {
          day.locations.map((location) => <LocationCard 
                key = {location.id}
                name = {location.name}
                description = {location.description}
                time = {location.time} 
                duration = {location.duration}
                cost = {location.cost}
                img = {location.img}
           />)
        }
      </div>
    </div>
  );
}
