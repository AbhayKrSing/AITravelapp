import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TravelPreferences = () => {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [budget, setBudget] = useState("");
  const [travelGroup, setTravelGroup] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ destination, duration, budget, travelGroup });
    navigate("/trip", {
      state: { destination, duration, budget, travelGroup },
    });
  };

  const budgetOptions = [
    { value: "Cheap", icon: "💰", description: "Stay conscious of costs" },
    {
      value: "Moderate",
      icon: "💸",
      description: "Keep cost on the average side",
    },
    { value: "Luxury", icon: "💎", description: "Dont worry about cost" },
  ];

  const travelGroupOptions = [
    {
      value: "Just Me",
      icon: "🚶",
      description: "A solo traveler in exploration",
    },
    { value: "A Couple", icon: "👫", description: "Two travelers in tandem" },
    {
      value: "Family",
      icon: "👨‍👩‍👧‍👦",
      description: "A group of fun-loving adventurers",
    },
    { value: "Friends", icon: "👥", description: "A bunch of thrill-seekers" },
  ];

  return (
    <div className="travel-preferences-container">
      <h1>
        Tell us your travel preferences{" "}
        <span className="emoji-header">💰🌴</span>
      </h1>
      <p className="subtitle">
        Just provide some basic information, and our AI-powered trip planner
        will generate a customized itinerary based on your preferences.
      </p>

      <form onSubmit={handleSubmit} className="travel-form">
        <div className="form-group">
          <label htmlFor="destination">
            What is your destination of choice?
          </label>
          <input
            type="text"
            className="select-destination"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter Your Destination"
            required
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="duration">
            How many days are you planning your trip?
          </label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Enter number of days"
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label>What is Your Budget?</label>
          <div className="options-grid">
            {budgetOptions.map((option) => (
              <div
                key={option.value}
                className={`option-card ${
                  budget === option.value ? "selected" : ""
                }`}
                onClick={() => setBudget(option.value)}
              >
                <span className="option-icon">{option.icon}</span>
                <h3>{option.value}</h3>
                <p>{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Who do you plan on traveling with?</label>
          <div className="options-grid">
            {travelGroupOptions.map((option) => (
              <div
                key={option.value}
                className={`option-card ${
                  travelGroup === option.value ? "selected" : ""
                }`}
                onClick={() => setTravelGroup(option.value)}
              >
                <span className="option-icon">{option.icon}</span>
                <h3>{option.value}</h3>
                <p>{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        <button type="submit" className="generate-trip-btn">
          Generate My Dream Trip 🚀
        </button>
      </form>
    </div>
  );
};

export default TravelPreferences;
