import React from "react";
import "./newsTab.css";

export default function newsTab(props) {
	return (
		<div className="news-tab">
			<div className="img-container-left">
				<img src={props.imageLink} alt="" />
			</div>
			<div className="desc-container-right">
				<h2 className="desc-title">{props.descTitle}</h2>
				<p className="desc-details">{props.descDetails.slice(0, 160) + "..."}</p>
				<p className="desc-date">{props.descDate}</p>
			</div>
		</div>
	);
}
