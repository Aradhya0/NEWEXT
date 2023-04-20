import React from "react";
import "./stockMarket.css";
import { PlayArrow } from "@mui/icons-material";

export default function StockMarketTabs(props) {
	return (
		<div className="stockmarket-tabs--content">
			{/* Left content of Tabs */}

			<div className="stockmarket-tabs--left">
				<div className="stockmarket-tabs--name">
					<h3>
						{props.name.charAt(0).toUpperCase() + props.name.slice(1).toLowerCase()}
					</h3>
					<p>{[...props.abbreviation].map((e, index) => (index % 2 == 0 ? e : ""))}</p>
				</div>
			</div>

			{/* Right content of Tabs */}

			<div className="stockmarket-tabs--right">
				<div className="stockmarket-tabs--right---upper">
					<p className={`${props.percentClass}`}>
						{props.changePercentages >= 0 ? "+" : ""}
						{props.changePercentages}
					</p>
					<PlayArrow className={`percent-arrow ${props.percentClass}`} />
				</div>
				<h2>₹{props.currentPrices}</h2>
			</div>
		</div>
	);
}
