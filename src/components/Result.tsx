import React from "react";
import { model } from "../config/Gemini";
import { useEffect } from "react";

const Result = () => {
  useEffect(() => {
    generateResponse();
  }, []);
  const generateResponse = async () => {
    let prompt = `
   Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format.
 using this JSON schema:
    {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "location": {
      "type": "string"
    },
    "duration": {
      "type": "string"
    },
    "couple": {
      "type": "boolean"
    },
    "budget": {
      "type": "string"
    },
    "hotels": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "hotelName": {
            "type": "string"
          },
          "hotelAddress": {
            "type": "string"
          },
          "price": {
            "type": "string"
          },
          "hotelImageUrl": {
            "type": "string",
            "format": "uri"
          },
          "geoCoordinates": {
            "type": "string"
          },
          "rating": {
            "type": "string"
          },
          "description": {
            "type": "string"
          }
        },
        "required": ["hotelName", "hotelAddress", "price", "hotelImageUrl", "geoCoordinates", "rating", "description"]
      }
    },
    "itinerary": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "day": {
            "type": "integer"
          },
          "places": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "placeName": {
                  "type": "string"
                },
                "placeImageUrl": {
                  "type": "string",
                  "format": "uri"
                },
                "geoCoordinates": {
                  "type": "string"
                },
                "ticketPricing": {
                  "type": "string"
                },
                "timeToTravel": {
                  "type": "string"
                },
                "bestTimeToVisit": {
                  "type": "string"
                }
              },
              "required": ["placeName", "placeImageUrl", "geoCoordinates", "ticketPricing", "timeToTravel", "bestTimeToVisit"]
            }
          }
        },
        "required": ["day", "places"]
      }
    }
  },
  "required": ["location", "duration", "couple", "budget", "hotels", "itinerary"]
}
`;
    model.generateContent(prompt);

    let result = await model.generateContent(prompt);
    console.log(result.response.text());
  };
  return <div></div>;
};

export default Result;
