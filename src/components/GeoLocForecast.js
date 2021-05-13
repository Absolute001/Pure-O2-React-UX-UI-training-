import React, { useContext } from "react";
import { Context } from "../context/Context";

const GeoLocForecast = (props) => {
  const { colorAQI } = useContext(Context);
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dt = new Date(props.date);
  const day = dt.getDay(dt);
  return (
    <div className={`flex flex-col p-4 sm:p-10`}>
      <h1 className="flex flex-col lg:text-2xl text-3xl mb-4 font-medium text-white">
        {daysOfTheWeek[day]}
        <span className="font-normal lg:text-base text-lg">
          {dt.toLocaleDateString()}
        </span>
      </h1>

      <div className="border-t-2 flex lg:flex-col justify-evenly sm:text-2xl lg:text-lg font-bold text-white">
        <div className="flex flex-col lg:flex-row shadow-lg my-4">
          <div
            className="lg:w-4  w-full h-4 lg:h-auto"
            style={{ backgroundColor: colorAQI(props.max) }}
          ></div>
          <p className="p-2 rounded">{`Max: ${props.max}`}</p>
        </div>
        <div className="flex flex-col lg:flex-row shadow-lg my-4">
          <div
            className="lg:w-4  w-full h-4 lg:h-auto"
            style={{ backgroundColor: colorAQI(props.min) }}
          ></div>
          <p className="p-2 rounded">{`Min: ${props.min}`}</p>
        </div>
        <div className="flex flex-col lg:flex-row shadow-lg my-4">
          <div
            className="lg:w-4  w-full h-4 lg:h-auto"
            style={{ backgroundColor: colorAQI(props.avg) }}
          ></div>
          <p className="p-2 rounded">{`Avg: ${props.avg}`}</p>
        </div>
      </div>
    </div>
  );
};

export default GeoLocForecast;
