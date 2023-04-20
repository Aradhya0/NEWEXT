import React, { useEffect, useState } from "react";
import "./weatherLoc.css";
import { ChevronRightIcon, SunIcon } from "@heroicons/react/24/outline";
import axios from "axios";

export default function WeatherLoc() {
  const [result, setResult] = useState();
  const [date, setDate] = useState();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const city = "raipur";
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  useEffect(() => {
    const getWeatherReport = async () => {
      const { data } = await axios.get(
        `http://localhost:9876/weather/getweather?city=${city}`
      );
      setResult(data);
      setDate(new Date().getDate());
      setDay(days[new Date().getDay()]);
      setMonth(months[new Date().getMonth()]);
    };
    getWeatherReport();
  }, []);
  return (
    <div className="container-weatherloc">
      <div className="weatherloc">
        <div className="layout-flex">
          <h6>{result?.name}</h6>
          <ChevronRightIcon className="weatherloc-icon--more" />
        </div>
        <div className="layout-flex">
          <p className="weatherloc-temperature">
            {Math.floor(result?.main.temp)}&#176;
          </p>
          <div className="layout-flex--direction">
            <p className="weatherloc-weather">{result?.weather[0].main}</p>
            <p className="weatherloc-daydate">{`${day},${date} ${month}`}</p>
          </div>
          <SunIcon className="weatherloc-icon--weather" />
        </div>
      </div>
    </div>
  );
}
