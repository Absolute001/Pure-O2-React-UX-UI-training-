/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from "react";
import { Context } from "../context/Context";
import GeoLocViewer from "./GeoLocViewer";

const Geoloc = () => {
  const [showResult, setShowResult] = useState(false);
  const { geoLocData, fetchDataFromPosition, healthAQI, colorAQI } =
    useContext(Context);

  useEffect(() => {
    fetchDataFromPosition();
  }, []);

  return (
    <section className="mx-auto max-w-screen-xl pb-16 xl:py-16 text-white">
      <div className="flex">
        <h1 className="text-6xl font-bold leading-12 tracking-wide px-4 py-8 sm:p-16 mb-8 w-full bg-city xl:rounded-br-lg xl:rounded-tr-lg">
          Do you <br /> breathe clean air?
          <br />
          <span className="text-3xl leading-12 tracking-wide">
            Let's check....
          </span>
        </h1>
      </div>

      {geoLocData ? (
        <GeoLocViewer
          name={geoLocData.city.name}
          colorAQI={colorAQI(geoLocData.aqi)}
          healthAQI={healthAQI(geoLocData.aqi)}
          showed={showResult}
          data={geoLocData.forecast.daily.pm25}
        />
      ) : null}
      <div className="flex">
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowResult((prevState) => !prevState);
          }}
          className={`hover:bg-green-700 mt-8
          transform transition duration-500 hover:scale-105 
          focus:outline-none w-52 py-2 text-2xl font-bold mx-auto ${
            showResult ? "bg-orange" : "bg-blue"
          }`}
        >
          {showResult ? "HIDE" : "CHECK MY CITY"}
        </button>
      </div>
    </section>
  );
};

export default Geoloc;
