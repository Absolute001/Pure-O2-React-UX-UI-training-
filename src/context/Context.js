import React, { useState } from "react";

import axios from "axios";

const Context = React.createContext();

const ContextProvider = (props) => {
  const apiKey = process.env.REACT_APP_API_TOKEN;
  const baseUrl = "https://api.waqi.info/feed/";
  const [geoLocData, setGeolocData] = useState(null);


  const fetchDataFromPosition = () => {
    axios
      .get(`${baseUrl}here/?token=${apiKey}`)
      .then((res) => {
        setGeolocData(res.data.data);
      })
      .catch((e) =>
        alert(
          "PLEASE ACTIVATE A CORS EXTENSION OR RUN ON YOUR LOCALHOST FROM THE GITHUB REPO"
        )
      );
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
