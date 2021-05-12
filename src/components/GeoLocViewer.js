import React, { useRef } from "react";
import { AiFillFlag, AiOutlineFrown } from "react-icons/ai";
import GeoLocForecast from "./GeoLocForecast";

const GeoLocViewer = (props) => {
  const aqiContainerRef = useRef(null);
  return (
    <div
      className={`flex flex-col text-white transition-all duration-500 `}
      style={{
        opacity: props.showed ? "1" : "0",
        height: props.showed
          ? aqiContainerRef.current.getBoundingClientRect().height
          : "0px",
        overflow: !props.showed && "hidden",
        /* transition:
          "height 1s cubic-bezier(0.215, 0.610, 0.355, 1), opacity 1s", */
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
        <div className="xl:grid grid-cols-5 ">
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
