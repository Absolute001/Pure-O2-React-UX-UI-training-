import React, { useRef } from "react";
import { AiFillFlag, AiOutlineFrown } from "react-icons/ai";
import GeoLocForecast from "./GeoLocForecast";

const GeoLocViewer = (props) => {
  const aqiContainerRef = useRef(null);

  return (
    <div
      className={`flex flex-col text-white transition-all duration-500 rounded`}
      style={{
        opacity: props.showed ? "1" : "0",
        height: props.showed
          ? aqiContainerRef.current.getBoundingClientRect().height
          : "0px",
        overflow: !props.showed && "hidden",
      }}
    >
      <div className="p-4 sm:px-16" ref={aqiContainerRef}>
        <h2 className="text-2xl font-bold mb-8">{`City of ${props.name} *`}</h2>
        <div className="flex items-center">
          <div className=" flex border-2 items-center w-16 h-16 bg-white rounded-full">
            {props.colorAQI ? (
              <AiFillFlag
                className="mx-auto text-4xl sm:text-5xl"
                style={{ color: props.colorAQI }}
              />
            ) : (
              <AiOutlineFrown className="mx-auto text-4xl sm:text-5xl text-black" />
            )}
          </div>
          <h3 className="text-3xl sm:text-6xl ml-4 uppercase">
            {props.healthAQI}
          </h3>
        </div>
        <p className="italic text-sm mt-4 mb-16">
          *This is the nearest station to your IP based location
        </p>
        <h1 className="text-3xl sm:text-5xl mb-8 font-bold">
          This is how it's going to be in the next few days
        </h1>

        <div className="text-2xl rounded font-bold mb-2 bg-green-800  p-4 sm:px-8">
          <h1>Pm25 values for the week</h1>
        </div>
        <div className="lg:grid grid-cols-5 rounded bg-green-700">
          {props.data.map((day, index) => (
            <GeoLocForecast
              key={index}
              avg={day.avg}
              max={day.max}
              min={day.min}
              date={day.day}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeoLocViewer;
