import React from "react";
import Header from "../../components/homepage/Header/Header";
import Navbar from "../../components/homepage/Navbar/Navbar";
import CategoryMain from "./categoryMain/categoryMain";
import Footer from "../../components/homepage/Footer/Footer";

export default function categoryNews() {
	const category = "sports";
	return (
		<div>
			<Header />
			<Navbar />
			<CategoryMain category={category} />
			<Footer />
		</div>
	);
}
