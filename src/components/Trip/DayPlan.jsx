import React from "react";
import LocationCard from "./LocationCard";

export default function DayPlan({day}) {
  
  return (
    <div>
      <h3>Day {day.day}</h3>
      <div className="schedule-grid">
        {
          day.places.map((place, idx) => <LocationCard 
                key = {idx}
                name = {place.placeName}
                description = {place.description}
                time = {place.bestTimeToVisit} 
                duration = {place.timeToTravel}
                cost = {place.ticketPricing}
                // img = {place.placeImageUrl}
                img = {img_url[(Math.ceil(Math.random()*100)) % 4]}
           />)
        }
      </div>
    </div>
  );
}


const img_url = [
  "https://images.unsplash.com/photo-1661197884083-ab22b7ad9204?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
  "https://media.istockphoto.com/id/1078903506/photo/rooftop-image-of-buildings-and-neighboring-community-mumbai-maharashtra.webp?b=1&s=170667a&w=0&k=20&c=TLMBLoSm3swggjMvflCEDEcPO-jJTMc08GWcMwYbQ4k=",
  "https://images.unsplash.com/photo-1499174549139-68d3f37243b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG93bnxlbnwwfHwwfHx8MA%3D%3D"
];