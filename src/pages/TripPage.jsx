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

          {data !== null ? (
            <>
              <HotelRecommendation hotels={data.hotels} />
              <div className="flex-column">
                <h2 className="divider">Places to Visit</h2>
                <div className="flex-column">
                  {data.itinerary.map((day, idx) => (
                    <DayPlan day={day} key={idx} />
                  ))}
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </main>

      {/* <footer className="center">Plan created by Travel Genie</footer> */}
    </>
  );
}
