import { FaPaperPlane } from "react-icons/fa";
import DayPlan from "../components/Trip/DayPlan";
import HotelRecommendation from "../components/Trip/HotelRecommendation";
import { useLocation } from "react-router-dom";
import { generateResponse } from "../AIResponse/Result";
import { useEffect } from "react";
import { useState } from "react";

export default function TripPage() {
  const location = useLocation();

  const [data, setData] = useState(null);

  const { destination, duration, budget, travelGroup } = location.state || {};

  useEffect(() => {
    (async () => {
      const res = await generateResponse(
        destination,
        duration,
        budget,
        travelGroup
      );
      const result = JSON.parse(res.split("\n").slice(1, -1).join("\n"));
      setData(result);
    })();
  }, [setData]);

  return (
    <>
      {data === null ? (
        <div className="loader"></div>
      ) : (
        <>
          <main className="trip-box">
            <img className="plan-main-img" src="/image1.jpg" />
            <div className="plan-details">
              <div className="flex-row-sb">
                <div className="flex-column">
                  <h2>
                    {destination[0].toUpperCase() +
                      destination.slice(1).toLowerCase()}
                  </h2>
                  <div className="flex-row chips">
                    <div>📅 {duration} Day</div>
                    <div>💰 {budget} Budget</div>
                    <div>🥂 Type Traveler: {travelGroup}</div>
                  </div>
                </div>
                <button className="plain-btn">
                  <FaPaperPlane />
                </button>
              </div>
              <HotelRecommendation hotels={data.hotels} />
              <div className="flex-column">
                <h2 className="divider">Places to Visit</h2>
                <div className="flex-column">
                  {data.itinerary.map((day, idx) => (
                    <DayPlan day={day} key={idx} />
                  ))}
                </div>
              </div>
            </div>
          </main>

          <footer className="center">Plan created by Travel Genie</footer>
        </>
      )}
    </>
  );
}

const Hotel_recommendation = [
  {
    id: 1,
    name: "Hotel The Grand",
    img: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
    address: "11-B, Residency Road, Jammu, Jammu and Kashmir 180001",
    price: "$20 - $40",
    stars: "3.5",
  },
  {
    id: 2,
    name: "Hotel Sidharth",
    img: "https://cdn.pixabay.com/photo/2015/09/14/12/51/hotel-939501_1280.jpg",
    address: "18, Residency Road, Jammu, Jammu and Kashmir 180001",
    price: "$15 - $30",
    stars: "3",
  },
  {
    id: 3,
    name: "Hotel The Park",
    img: "https://cdn.pixabay.com/photo/2014/05/21/14/56/bedroom-349698_1280.jpg",
    address: "24, Residency Road, Jammu, Jammu and Kashmir 180001",
    price: "$25 - $50",
    stars: "4",
  },
  {
    id: 4,
    name: "Hotel The Royal",
    img: "https://cdn.pixabay.com/photo/2015/11/06/11/45/interior-1026448_1280.jpg",
    address: "14, Residency Road, Jammu, Jammu and Kashmir 180001",
    price: "$30 - $60",
    stars: "4",
  },
];

const plan = [
  {
    area: "Jammu",
    locations: [
      {
        id: 1,
        time: "9:00AM - 12:00PM",
        img: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
        name: "Biltmore Estate",
        description:
          "A beautiful temple dedicated to Lord Shiva, known for its intricate carvings and peaceful atmosphere.",
        duration: "30 minutes",
        cost: "Free",
      },
      {
        id: 2,
        time: "9:00AM - 12:00PM",
        img: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
        name: "Biltmore Estate",
        description:
          "A beautiful temple dedicated to Lord Shiva, known for its intricate carvings and peaceful atmosphere.",
        duration: "30 minutes",
        cost: "Free",
      },
      {
        id: 3,
        time: "9:00AM - 12:00PM",
        img: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
        name: "Biltmore Estate",
        description:
          "A beautiful temple dedicated to Lord Shiva, known for its intricate carvings and peaceful atmosphere.",
        duration: "30 minutes",
        cost: "Free",
      },
      {
        id: 4,
        time: "9:00AM - 12:00PM",
        img: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
        name: "Biltmore Estate",
        description:
          "A beautiful temple dedicated to Lord Shiva, known for its intricate carvings and peaceful atmosphere.",
        duration: "30 minutes",
        cost: "Free",
      },
    ],
  },
  {
    area: "Jammu",
    locations: [
      {
        id: 1,
        time: "9:00AM - 12:00PM",
        img: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
        name: "Biltmore Estate",
        description:
          "A beautiful temple dedicated to Lord Shiva, known for its intricate carvings and peaceful atmosphere.",
        duration: "30 minutes",
        cost: "Free",
      },
      {
        id: 2,
        time: "9:00AM - 12:00PM",
        img: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
        name: "Biltmore Estate",
        description:
          "A beautiful temple dedicated to Lord Shiva, known for its intricate carvings and peaceful atmosphere.",
        duration: "30 minutes",
        cost: "Free",
      },
      {
        id: 3,
        time: "9:00AM - 12:00PM",
        img: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
        name: "Biltmore Estate",
        description:
          "A beautiful temple dedicated to Lord Shiva, known for its intricate carvings and peaceful atmosphere.",
        duration: "30 minutes",
        cost: "Free",
      },
      {
        id: 4,
        time: "9:00AM - 12:00PM",
        img: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
        name: "Biltmore Estate",
        description:
          "A beautiful temple dedicated to Lord Shiva, known for its intricate carvings and peaceful atmosphere.",
        duration: "30 minutes",
        cost: "Free",
      },
    ],
  },
  {
    area: "Jammu",
    locations: [
      {
        id: 1,
        time: "9:00AM - 12:00PM",
        img: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
        name: "Biltmore Estate",
        description:
          "A beautiful temple dedicated to Lord Shiva, known for its intricate carvings and peaceful atmosphere.",
        duration: "30 minutes",
        cost: "Free",
      },
      {
        id: 2,
        time: "9:00AM - 12:00PM",
        img: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
        name: "Biltmore Estate",
        description:
          "A beautiful temple dedicated to Lord Shiva, known for its intricate carvings and peaceful atmosphere.",
        duration: "30 minutes",
        cost: "Free",
      },
      {
        id: 3,
        time: "9:00AM - 12:00PM",
        img: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
        name: "Biltmore Estate",
        description:
          "A beautiful temple dedicated to Lord Shiva, known for its intricate carvings and peaceful atmosphere.",
        duration: "30 minutes",
        cost: "Free",
      },
      {
        id: 4,
        time: "9:00AM - 12:00PM",
        img: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
        name: "Biltmore Estate",
        description:
          "A beautiful temple dedicated to Lord Shiva, known for its intricate carvings and peaceful atmosphere.",
        duration: "30 minutes",
        cost: "Free",
      },
    ],
  },
  {
    area: "Jammu",
    locations: [
      {
        id: 1,
        time: "9:00AM - 12:00PM",
        img: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
        name: "Biltmore Estate",
        description:
          "A beautiful temple dedicated to Lord Shiva, known for its intricate carvings and peaceful atmosphere.",
        duration: "30 minutes",
        cost: "Free",
      },
      {
        id: 2,
        time: "9:00AM - 12:00PM",
        img: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
        name: "Biltmore Estate",
        description:
          "A beautiful temple dedicated to Lord Shiva, known for its intricate carvings and peaceful atmosphere.",
        duration: "30 minutes",
        cost: "Free",
      },
      {
        id: 3,
        time: "9:00AM - 12:00PM",
        img: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
        name: "Biltmore Estate",
        description:
          "A beautiful temple dedicated to Lord Shiva, known for its intricate carvings and peaceful atmosphere.",
        duration: "30 minutes",
        cost: "Free",
      },
      {
        id: 4,
        time: "9:00AM - 12:00PM",
        img: "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
        name: "Biltmore Estate",
        description:
          "A beautiful temple dedicated to Lord Shiva, known for its intricate carvings and peaceful atmosphere.",
        duration: "30 minutes",
        cost: "Free",
      },
    ],
  },
];
