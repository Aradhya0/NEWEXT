import React, { useState } from "react";
import "./navbar.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [scrollLeft, setScrollLeft] = useState(false);

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
        <button className="nav-btn nav-active">#trending</button>
        <button className="nav-btn">#health</button>
        <button className="nav-btn">#politics</button>
        <button className="nav-btn">#entertainment</button>
        <button className="nav-btn">#technology</button>
        <button className="nav-btn">#finance</button>
        <button className="nav-btn">#science</button>
        <button className="nav-btn">#trending</button>
        <button className="nav-btn">#trending</button>
        <button className="nav-btn">#trending</button>
        <button className="nav-btn">#trending</button>
        <button className="nav-btn">#trending</button>
        <button className="nav-btn">#trending</button>
        <button className="nav-btn">#trending</button>
        <button className="nav-btn">#trending</button>
        <button className="nav-btn">#trending</button>
        <button className="nav-btn">#trending</button>
        <button className="nav-btn">#trending</button>
        <button className="nav-btn">#trending</button>
      </div>
      <button className="nav-btn--next" onClick={() => scroll("next")}>
        <ChevronRightIcon className="nav-btn--next---icon" />
      </button>
    </div>
  );
}
