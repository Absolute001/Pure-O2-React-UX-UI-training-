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
  console.log(day);
  return (
    <div className={`flex flex-col p-4 sm:p-10 bg-green-800`}>
      <h1 className="flex flex-col text-xl sm:text-3xl mb-4 font-bold text-white">
        {daysOfTheWeek[day]}
        <span className="font-normal ">{dt.toLocaleDateString()}</span>
      </h1>
      <div className="border-t-2 flex xl:flex-col justify-evenly	 sm:text-2xl font-bold text-white">
        <div className="flex flex-col">
          <p className="p-2 rounded">{`Max: ${props.max}`}</p>
          <div
            className="h-4"
            style={{ backgroundColor: colorAQI(props.max) }}
          ></div>
        </div>
        <div className="flex flex-col">
          <p className="p-2 rounded">{`Min: ${props.min}`}</p>
          <div
            className="h-4"
            style={{ backgroundColor: colorAQI(props.min) }}
          ></div>
        </div>
        <div className="flex flex-col">
          <p className="p-2 rounded">{`Avg: ${props.avg}`}</p>
          <div
            className="h-4"
            style={{ backgroundColor: colorAQI(props.avg) }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GeoLocForecast;
