import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import DayPlan from "../components/Trip/DayPlan";
import HotelRecommendation from "../components/Trip/HotelRecommendation";

export default function TripPage() {

  // const main_img = "https://wallpaperswide.com/download/luxury_hotel-wallpaper-1280x800.jpg";
  const main_img = "https://images.unsplash.com/photo-1464703278390-df5b3f1f61b2?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const destination = "Jammu and Kashmir";

  return (
    <>
      <main className="trip-box">
        <img
          className="plan-main-img"
          src={main_img}
          // src={response.imgUrl}
        />

        <div className="plan-details">
          <div className="flex-row-sb">
            <div className="flex-column">
              <h2>{response.location}</h2>
              <div className="flex-row chips">
                <div>📅 {response.duration} </div>
                <div>💰 {response.budget} Budget</div>
                <div>🥂 Travelers: {response.couple ? "couple" : "Solo" }</div>
              </div>
            </div>
            <button className="plain-btn">
              <FaPaperPlane />
            </button>
          </div>

          <HotelRecommendation hotels={response.hotels} />

          <div className="flex-column">
            <h2 className="divider">Places to Visit</h2>
            <div className="flex-column">
              {
                response.itinerary.map((day) => <DayPlan key={day.day} day={day} />)
              }
            </div>
          </div>
        </div>
      </main>

      <footer className="center">
        Plan created by Travel Jinny
      </footer>
    </>
  );
}


const response = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "location": "Jammu",
  "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Jammu_city.jpg/1280px-Jammu_city.jpg",
  "duration": "10 Days",
  "couple": false,
  "budget": "Cheap",
  "hotels": [
    {
      "hotelName": "Hotel The Grand Plaza",
      "hotelAddress": "Gandhi Nagar, Jammu, Jammu and Kashmir 180004",
      "price": "₹1,500 - ₹3,000",
      "hotelImageUrl": "https://images.trvl-media.com/hotels/1000000/900000/895000/894950/894950_132_b.jpg",
      "geoCoordinates": "32.7265,74.8744",
      "rating": "4.0",
      "description": "A budget-friendly hotel with comfortable rooms and basic amenities."
    },
    {
      "hotelName": "Hotel KC Residency",
      "hotelAddress": "Bahubazar, Jammu, Jammu and Kashmir 180001",
      "price": "₹1,000 - ₹2,500",
      "hotelImageUrl": "https://www.oyorooms.com/hotel/hotel-kc-residency-jammu-141255/images/428642/hotel_external_1.jpg",
      "geoCoordinates": "32.7183,74.8658",
      "rating": "3.5",
      "description": "A basic and affordable hotel located in the city center."
    },
    {
      "hotelName": "Hotel The Royal Regency",
      "hotelAddress": "Channi Himmat, Jammu, Jammu and Kashmir 180001",
      "price": "₹1,200 - ₹2,800",
      "hotelImageUrl": "https://www.booking.com/hotel/in/the-royal-regency-jammu.en-gb.html?aid=304142&label=gen173nr-1DCAEoggI46AdIM1gEaEyIAQGYAQ24AQfIAQzYAQ3oAgM;sbe=1&sid=b75ba362d1e29e64b4a1463557829a68&sb_price_type=total&srpvid=01d870341dfc007b&checkin=2024-03-01&checkout=2024-03-02&adults=2&rooms=1&dest_id=-157867&dest_type=city&accommodationtype=1&from_sf=1&from=searchresults;highlight_room=0&no_rooms=1&group_adults=2&group_children=0&sb_search_group_id=45533102543",
      "geoCoordinates": "32.7075,74.8869",
      "rating": "3.8",
      "description": "A decent hotel with comfortable rooms and a rooftop restaurant."
    }
  ],
  "itinerary": [
    {
      "day": 1,
      "places": [
        {
          "placeName": "Bahubazar",
          "description": "A bustling market known for its street food, handicrafts, and local produce. It's a great place to experience the local culture and grab a bite to eat.",
          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Bahubazar,_Jammu.jpg/1280px-Bahubazar,_Jammu.jpg",
          "geoCoordinates": "32.7186,74.8659",
          "ticketPricing": "Free",
          "timeToTravel": "Half-day",
          "bestTimeToVisit": "Morning and evening"
        },
        {
          "placeName": "Ranbir Singh Pura",
          "description": "A historic part of Jammu, with ancient temples, traditional houses, and narrow lanes. It's a fascinating place to explore the city's history.",
          "placeImageUrl": "https://www.flickr.com/photos/128047664@N07/3927788296/in/photostream/",
          "geoCoordinates": "32.7193,74.8678",
          "ticketPricing": "Free",
          "timeToTravel": "Half-day",
          "bestTimeToVisit": "Morning and evening"
        }
      ]
    },
    {
      "day": 2,
      "places": [
        {
          "placeName": "Dogra Art Museum",
          "description": "A museum showcasing the art and culture of the Dogra dynasty. It houses a collection of paintings, sculptures, and artifacts.",
          "placeImageUrl": "https://www.tripadvisor.com/Tourism-g297589-Jammu_Jammu_and_Kashmir-Vacations.html",
          "geoCoordinates": "32.7183,74.8665",
          "ticketPricing": "₹20 per person",
          "timeToTravel": "2-3 hours",
          "bestTimeToVisit": "Morning and afternoon"
        },
        {
          "placeName": "Shanti Devi Temple",
          "description": "A temple dedicated to Goddess Durga. It is a popular pilgrimage site and offers stunning views of the city.",
          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Shanti_Devi_Temple_%28Jammu%29.JPG/1280px-Shanti_Devi_Temple_%28Jammu%29.JPG",
          "geoCoordinates": "32.7244,74.8762",
          "ticketPricing": "Free",
          "timeToTravel": "1-2 hours",
          "bestTimeToVisit": "Morning and evening"
        }
      ]
    },
    {
      "day": 3,
      "places": [
        {
          "placeName": "Peer Kho",
          "description": "A historical site with ancient caves and a shrine dedicated to a Sufi saint. It offers scenic views of the city and the surrounding hills.",
          "placeImageUrl": "https://www.tripadvisor.com/Tourism-g297589-Jammu_Jammu_and_Kashmir-Vacations.html",
          "geoCoordinates": "32.7332,74.8736",
          "ticketPricing": "Free",
          "timeToTravel": "Half-day",
          "bestTimeToVisit": "Morning and evening"
        },
        {
          "placeName": "Amar Mahal Palace",
          "description": "A royal palace built in the 19th century. It houses a collection of artifacts, paintings, and photographs of the Dogra dynasty.",
          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Amar_Mahal_Palace_%28Jammu%29.jpg/1280px-Amar_Mahal_Palace_%28Jammu%29.jpg",
          "geoCoordinates": "32.7208,74.8677",
          "ticketPricing": "₹50 per person",
          "timeToTravel": "2-3 hours",
          "bestTimeToVisit": "Morning and afternoon"
        }
      ]
    },
    {
      "day": 4,
      "places": [
        {
          "placeName": "Mubarak Mandi Palace",
          "description": "A historic palace built in the 19th century. It was the residence of the Dogra rulers of Jammu and Kashmir. Today, it houses a museum showcasing the history of the state.",
          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Mubarak_Mandi_Palace%2C_Jammu.jpg/1280px-Mubarak_Mandi_Palace%2C_Jammu.jpg",
          "geoCoordinates": "32.7191,74.8675",
          "ticketPricing": "₹50 per person",
          "timeToTravel": "2-3 hours",
          "bestTimeToVisit": "Morning and afternoon"
        }
      ]
    },
    {
      "day": 5,
      "places": [
        {
          "placeName": "Vaishno Devi Temple",
          "description": "A sacred Hindu temple dedicated to Goddess Vaishno Devi. It is one of the most popular pilgrimage sites in India. The journey to the temple involves a trek of around 13 km.",
          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/VaishnoDeviTemple.jpg/1280px-VaishnoDeviTemple.jpg",
          "geoCoordinates": "33.0295,75.0848",
          "ticketPricing": "Free",
          "timeToTravel": "Full-day",
          "bestTimeToVisit": "All year round"
        }
      ]
    },
    {
      "day": 6,
      "places": [
        {
          "placeName": "Patnitop",
          "description": "A hill station located around 112 km from Jammu. It is known for its stunning views of the Pir Panjal range and is a popular destination for trekking and nature walks.",
          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Patnitop.jpg/1280px-Patnitop.jpg",
          "geoCoordinates": "33.1778,75.2862",
          "ticketPricing": "Free",
          "timeToTravel": "Full-day",
          "bestTimeToVisit": "Summer and autumn"
        }
      ]
    },
    {
      "day": 7,
      "places": [
        {
          "placeName": "Sanasar",
          "description": "A beautiful meadow located around 100 km from Jammu. It is a popular destination for camping, trekking, and paragliding.",
          "placeImageUrl": "https://www.tripadvisor.com/Tourism-g297589-Jammu_Jammu_and_Kashmir-Vacations.html",
          "geoCoordinates": "33.1688,75.2868",
          "ticketPricing": "Free",
          "timeToTravel": "Full-day",
          "bestTimeToVisit": "Summer and autumn"
        }
      ]
    },
    {
      "day": 8,
      "places": [
        {
          "placeName": "Shiv Khori",
          "description": "A cave temple dedicated to Lord Shiva. It is a popular pilgrimage site and is located around 140 km from Jammu.",
          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Shiv_Khori_Cave_Temple%2C_Jammu_and_Kashmir.jpg/1280px-Shiv_Khori_Cave_Temple%2C_Jammu_and_Kashmir.jpg",
          "geoCoordinates": "33.2220,75.1476",
          "ticketPricing": "Free",
          "timeToTravel": "Full-day",
          "bestTimeToVisit": "All year round"
        }
      ]
    },
    {
      "day": 9,
      "places": [
        {
          "placeName": "Surinsar-Mansar Lakes",
          "description": "Two beautiful lakes located around 50 km from Jammu. They are a popular destination for boating, fishing, and birdwatching.",
          "placeImageUrl": "https://www.tripadvisor.com/Tourism-g297589-Jammu_Jammu_and_Kashmir-Vacations.html",
          "geoCoordinates": "32.9081,75.0060",
          "ticketPricing": "Free",
          "timeToTravel": "Full-day",
          "bestTimeToVisit": "All year round"
        }
      ]
    },
    {
      "day": 10,
      "places": [
        {
          "placeName": "Jammu Tawi Railway Station",
          "description": "The main railway station in Jammu. It is a good place to see the local architecture and get a glimpse of the city's hustle and bustle.",
          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Jammu_Tawi_Station.jpg/1280px-Jammu_Tawi_Station.jpg",
          "geoCoordinates": "32.7140,74.8668",
          "ticketPricing": "Free",
          "timeToTravel": "Half-day",
          "bestTimeToVisit": "Morning and evening"
        }
      ]
    }
  ]
};