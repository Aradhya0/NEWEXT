import React, { useEffect, useState } from "react";
import "./categoryMain.css";
import NewsTab from "../newsTab/newsTab";
import Trending from "../trending/Trending";
import axios from "axios";

export default function categoryMain(props) {
	const [categoryNews, setCategoryNews] = useState();
	useEffect(() => {
		const fnc = async () => {
			const { data } = await axios.get(
				`http://localhost:9876/news/getnews?lang=en&category=${props.category}`
			);
			setCategoryNews(data.result);
		};
		fnc();
	}, []);

	return (
		<div className="main">
			<div className="left">
				{categoryNews?.slice(5, 10).map((e, index) => (
					<NewsTab
						key={index}
						imageLink={e.image}
						descTitle={e.title}
						descDetails={e.content}
						descDate={e.postedAt}
					/>
				))}
			</div>
			<div className="right">
				<Trending category={props.category} />
			</div>
		</div>
	);
}
