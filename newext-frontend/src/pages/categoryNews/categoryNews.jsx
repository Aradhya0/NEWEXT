import React from "react";
import Header from "../../components/homepage/Header/Header";
import CategoryMain from "./categoryMain/categoryMain";
import Footer from "../../components/homepage/Footer/Footer";
import { useLocation } from "react-router-dom";

export default function categoryNews() {
  //   const category = "technology";
  const location = useLocation();
  console.log(location.state.category);
  return (
    <div>
      <Header />
      <CategoryMain category={location.state.category} />
      <Footer />
    </div>
  );
}
