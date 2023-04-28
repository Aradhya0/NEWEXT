import React, { useEffect, useState } from "react";
import "./stockMarket.css";
import StockMarketTabs from "./StockMarketTabs";
import { ArrowForwardIos } from "@mui/icons-material";
import axios from "axios";

export default function StockMarketToday() {
	const [dataStocks, setdataStocks] = useState();
	useEffect(() => {
		const fnc = async () => {
			const { data } = await axios.get(`http://localhost:9876/stocks/getstocks`);
			setdataStocks(data);
		};
		fnc();
	}, []);

	return (
		<div className="stockmarket">
			<div className="stockmarket-header">
				<div className="stockmarket-headline">
					<h2>Stock Market Today</h2>
					<p>
						<ArrowForwardIos className="stockmarket-heading--arrow" />
					</p>
				</div>
			</div>
			<div className="tabs-container">
				{dataStocks?.slice(0, 5).map((e, index) => (
					<StockMarketTabs
						key={index}
						name={e.symbol}
						abbreviation={e.identifier}
						changePercentages={e.pChange}
						percentClass={
							e.pChange >= 0
								? "stocks-increased-percentage"
								: "stocks-decrease-percentage"
						}
						currentPrices={e.lastPrice}
					/>
				))}
			</div>
		</div>
	);
}
