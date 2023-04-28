import { React, useState, useEffect } from "react";
import HeroCarousel from "./HeroCarousel/HeroCarousel";
import WeatherLoc from "./Weather/WeatherLoc";
import StockMarketToday from "./StockMarket/StockMarketToday";
import "./hero.css";

export default function Hero() {
  return (
    <div>
      <div className="section-hero">
        <HeroCarousel />
        <div className="section-hero--right">
          <WeatherLoc />
          <StockMarketToday />
        </div>
      </div>
    </div>
  );
}
