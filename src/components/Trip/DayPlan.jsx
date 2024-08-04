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
                img = {img_url[(Math.ceil(Math.random()*100)) % 7]}
           />)
        }
      </div>
    </div>
  );
}


const img_url = [
  "https://images.unsplash.com/photo-1661197884083-ab22b7ad9204?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",

  "https://media.istockphoto.com/id/1078903506/photo/rooftop-image-of-buildings-and-neighboring-community-mumbai-maharashtra.webp?b=1&s=170667a&w=0&k=20&c=TLMBLoSm3swggjMvflCEDEcPO-jJTMc08GWcMwYbQ4k=",

  "https://images.unsplash.com/photo-1499174549139-68d3f37243b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG93bnxlbnwwfHwwfHx8MA%3D%3D",

  "https://media.istockphoto.com/id/1304675927/photo/varanasi.jpg?s=612x612&w=0&k=20&c=RCnfUpRyopKbO6isaK1p-FUbRzgKYSKjV50MdCMhGxs=",

  "https://media.istockphoto.com/id/1163455002/photo/varanasi-city-architecture-with-view-of-migratory-birds-on-river-ganges-as-seen-from-a-boat.jpg?s=612x612&w=0&k=20&c=2jNlJLR7nHTmI4fB55PjOIfyXpaBtALcal0ahFBNPAc=",

  "https://media.istockphoto.com/id/510795912/photo/india-gate.jpg?s=612x612&w=0&k=20&c=kZkdrEDXEtoLK6Qh8XPywc9VYV95mJXXcWLBxHftN_U=",

  "https://media.istockphoto.com/id/1999376009/photo/the-unique-wooden-orthodox-ascension-cathedral-in-the-kazakh-city-of-almaty-on-a-winter-day.jpg?s=612x612&w=0&k=20&c=RCKe1RPUvySO1Cn4dkvJ58WNvV-XXc9m2ny3zu7wtQc="
];