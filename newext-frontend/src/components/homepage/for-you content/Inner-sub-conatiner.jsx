import React from "react";

function Innersubcontainerforyou(props) {
	return (
		<div className={`inner-sub-container-foryou margin-27`}>
			<div className={`for-you-img${props.index}`}></div>
			<div className="content">
				<h2 className="headline-foryou">{props.headline}</h2>
				<p className="summary-foryou">{props.summary}</p>
				<p className="day-status-foryou">{props.status}</p>
			</div>
		</div>
	);
}

export default Innersubcontainerforyou;
