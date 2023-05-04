import React, { useState } from "react";
import "./navbar.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrollLeft, setScrollLeft] = useState(false);
  const navigate = useNavigate();

  const scroll = (where) => {
    let box = document.getElementById("slidebox");
    let width = box.offsetWidth / 2;
    if (where === "prev") {
      box.scrollLeft = box.scrollLeft - width;
      if (box.scrollLeft < 600) {
        box.scrollLeft = 0;
        setScrollLeft(false);
      } else {
        setScrollLeft(true);
      }
    } else {
      setScrollLeft(true);
      box.scrollLeft = box.scrollLeft + width;
    }
  };
  const fnc = async (name) => {
    navigate("/categorynews", { state: { category: name } });
  };

  return (
    <div className="container-navbar">
      {scrollLeft && (
        <button className="nav-btn--prev" onClick={() => scroll("prev")}>
          <ChevronLeftIcon className="nav-btn--prev---icon" />
        </button>
      )}
      <div className="navbar-content" id="slidebox">
        {/* {dataCarousel.map((element,index) => {
          return (
            <button 
              className="nav-btn"
              key={index}
            >{`#${element.category}`}</button>
          )
        })} */}
        <button className="nav-btn nav-active" onClick={() => fnc("hatke")}>
          #trending
        </button>
        <button className="nav-btn" onClick={() => fnc("politics")}>
          #politics
        </button>
        <button className="nav-btn" onClick={() => fnc("entertainment")}>
          #entertainment
        </button>
        <button className="nav-btn" onClick={() => fnc("world")}>
          #world
        </button>
        <button className="nav-btn" onClick={() => fnc("national")}>
          #national
        </button>
        <button className="nav-btn" onClick={() => fnc("technology")}>
          #technology
        </button>
        <button className="nav-btn" onClick={() => fnc("startup")}>
          #startup
        </button>
        <button className="nav-btn" onClick={() => fnc("science")}>
          #science
        </button>
        <button className="nav-btn" onClick={() => fnc("business")}>
          #business
        </button>
        <button className="nav-btn" onClick={() => fnc("automobile")}>
          #automobile
        </button>
      </div>
      <button className="nav-btn--next" onClick={() => scroll("next")}>
        <ChevronRightIcon className="nav-btn--next---icon" />
      </button>
    </div>
  );
}
