import React, { useState } from "react";

import axios from "axios";

const Context = React.createContext();

const ContextProvider = (props) => {
  const apiKey = process.env.REACT_APP_API_TOKEN;
  const baseUrl =
    "https://thingproxy.freeboard.io/fetch/https://api.waqi.info/feed/";
  const [worldData, setWorldData] = useState([]);
  const [geoLocData, setGeolocData] = useState(null);

  const fetchDataFromWorld = async () => {
    const cities = [
      "Beijing",
      "New York",
      "Montreal",
      "Mumbai",
      "Tokyo",
      "Sao Paulo",
      "Mexico city",
      "Shangai",
      "Milan",
      "London",
    ];

    for (const city of cities) {
      try {
        const resp = await axios.get(`${baseUrl}${city}/?token=${apiKey}`);
        setWorldData((prevState) => [...prevState, resp.data.data]);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const fetchDataFromPosition = () => {
    axios
      .get(`${baseUrl}/here/?token=${apiKey}`, {
        headers: { "Access-Control-Allow-Origin": "https://awesome-montalcini-913bff.netlify.app/" },
      })
      .then((res) => {
        setGeolocData(res.data.data);
      })
      .catch((e) => console.log(e));
  };

  const colorAQI = (value) => {
    switch (true) {
      case value > 0 && value <= 50:
        return "#188F53";
      case value > 50 && value <= 101:
        return "#F3EB37";
      case value > 100 && value <= 151:
        return "#EB7551";
      case value > 150 && value <= 201:
        return "#EC4E9C";
      case value > 200 && value <= 251:
        return "#9958A3";
      case value > 250:
        return "#BC2231";
      default:
        return null;
    }
  };

  const healthAQI = (value) => {
    switch (true) {
      case value > 0 && value <= 50:
        return "Good";
      case value > 50 && value <= 101:
        return "Moderate";
      case value > 100 && value <= 151:
        return "Unhealthy For Sensitive Groups";
      case value > 150 && value <= 201:
        return "Unhealthy";
      case value > 200 && value <= 251:
        return "Very Unhealthy";
      case value > 250:
        return "Hazardous";
      default:
        return "We Don't Know";
    }
  };

  return (
    <Context.Provider
      value={{
        fetchDataFromWorld,
        worldData,
        fetchDataFromPosition,
        geoLocData,
        healthAQI,
        colorAQI,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
