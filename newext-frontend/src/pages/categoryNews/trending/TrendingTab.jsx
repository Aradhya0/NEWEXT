import React from "react";

export default function TrendingTab(props) {
	return (
		<div className="trending-tabs--content">
			<div className="trending-tabs--left">
				<h3>{props.num}.</h3>
			</div>

			<div className="trending-tabs--right">
				<p>{props.newsDetails}</p>
			</div>
		</div>
	);
}
