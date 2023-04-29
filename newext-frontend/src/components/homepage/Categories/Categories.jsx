import React, { useEffect, useState } from "react";
import Category from "./Category";
import "./Style/Category.css";
import axios from "axios";
// import data from "./news";
function Categories() {
	const [sportsNews, setSportsNews] = useState([]);
	const [techNews, setTechNews] = useState([]);
	const [politicsNews, setPoliticsNews] = useState([]);
	const fnc = async () => {
		const { data } = await axios.get(
			`http://localhost:9876/news/getnews?lang=en&category=sports`
		);
		setSportsNews(data.result);
	};
	const techFnc = async () => {
		const { data } = await axios.get(
			`http://localhost:9876/news/getnews?lang=en&category=technology`
		);
		setTechNews(data.result);
	};
	const politicsFnc = async () => {
		const { data } = await axios.get(
			`http://localhost:9876/news/getnews?lang=en&category=politics`
		);
		setPoliticsNews(data.result);
	};
	useEffect(() => {
		fnc();
		techFnc();
		politicsFnc();
	}, []);
	// console.log(sportsNews);
	// console.log(techNews);
	// console.log(politicsNews);

	return (
		<div>
			{/* <img src={sportsNews[0]?.image}></img> */}
			{/* {data[0].title} */}
			<Category
				Index="1"
				categoryTitle="Sports"
				imageUrl={sportsNews[0]?.image}
				imgHeadline={sportsNews[0]?.title}
				imgStatus={sportsNews[0]?.postedAt}
				subchild1ImageUrl={sportsNews[1]?.image}
				subchild1Headline={sportsNews[1]?.title}
				subchild1Summary={sportsNews[1]?.content.slice(0, 110) + "..."}
				subchild1Status={sportsNews[1]?.postedAt}
				subchild2ImageUrl={sportsNews[2]?.image}
				subchild2Headline={sportsNews[2]?.title}
				subchild2Summary={sportsNews[2]?.content.slice(0, 110) + "..."}
				subchild2Status={sportsNews[2]?.postedAt}
			/>
			<Category
				Index="2"
				categoryTitle="Technology"
				imageUrl={techNews[0]?.image}
				imgHeadline={techNews[0]?.title}
				imgStatus={techNews[0]?.postedAt}
				subchild1ImageUrl={techNews[1]?.image}
				subchild1Headline={techNews[1]?.title}
				subchild1Summary={techNews[1]?.content.slice(0, 110) + "..."}
				subchild1Status={techNews[1]?.postedAt}
				subchild2ImageUrl={techNews[2]?.image}
				subchild2Headline={techNews[2]?.title}
				subchild2Summary={techNews[2]?.content.slice(0, 110) + "..."}
				subchild2Status={techNews[2]?.postedAt}
			/>
			<Category
				Index="3"
				categoryTitle="Politics"
				imageUrl={politicsNews[0]?.image}
				imgHeadline={politicsNews[0]?.title}
				imgStatus={politicsNews[0]?.postedAt}
				subchild1ImageUrl={politicsNews[1]?.image}
				subchild1Headline={politicsNews[1]?.title}
				subchild1Summary={politicsNews[1]?.content.slice(0, 110) + "..."}
				subchild1Status={politicsNews[1]?.postedAt}
				subchild2ImageUrl={politicsNews[2]?.image}
				subchild2Headline={politicsNews[2]?.title}
				subchild2Summary={politicsNews[2]?.content.slice(0, 110) + "..."}
				subchild2Status={politicsNews[2]?.postedAt}
			/>
		</div>
	);
}

export default Categories;
