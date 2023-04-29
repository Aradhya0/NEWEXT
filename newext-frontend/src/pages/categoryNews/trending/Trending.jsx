import React, { useEffect, useState } from "react";
import { ArrowForwardIos } from "@mui/icons-material";
import "./TrendingStyle.css";
import TrendingTab from "./TrendingTab";
import axios from "axios";

export default function Trending(props) {
	const [trendingNews, setTrendingNews] = useState();
	useEffect(() => {
		const fnc = async () => {
			const { data } = await axios.get(
				`http://localhost:9876/news/getnews?lang=en&category=${props.category}`
			);
			setTrendingNews(data.result);
		};
		fnc();
	}, []);

	return (
		<div className="trending">
			<div className="trending-header">
				<div className="trending-headline">
					<h2>Trending</h2>
					<ArrowForwardIos className="trending-heading--arrow" />
				</div>
			</div>
			<div className="tabs-container">
				{trendingNews?.slice(0, 4).map((e, index) => (
					<TrendingTab key={index} num={index + 1} newsDetails={e.title} />
				))}
			</div>
		</div>
	);
}
