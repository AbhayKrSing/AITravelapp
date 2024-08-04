import { model } from "../config/Gemini";

export const generateResponse = async (destination, duration, budget, travelGroup) => {
  let prompt = `
   Generate Travel Plan for Location with its imageUrl: ${destination}, for ${duration} Days for ${travelGroup} with a ${budget} budget. Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details,Place descriptions, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for ${duration} days with each day plan with best time to visit in JSON format.
 using this JSON schema:
    {
  "type": "object",
  "properties": {
    "location": {
      "type": "string"
    },
    "imgUrl":{
     "type":"string"
    }
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
                "description":{
                  "type":"string"
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
              "required": ["placeName", "placeImageUrl", "geoCoordinates", "ticketPricing", "timeToTravel", "bestTimeToVisit","description"]
            }
          }
        },
        "required": ["day", "places"]
      }
    }
  },
  "required": ["location","imgUrl" ,"duration", "couple", "budget", "hotels", "itinerary"]
}
`;
  model.generateContent(prompt);

  let result = await model.generateContent(prompt);
  return result.response.text();
};
