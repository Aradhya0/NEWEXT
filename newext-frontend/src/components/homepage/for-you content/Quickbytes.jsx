import React from "react";
function QuickbyteHeadlines(props) {
	return (
		// <div className='outerQuickBytes' style={{backgroundColor : "rgba(202, 186, 226, 0.1)"}}>
		<div>
			<div className="quickbytes-headlines-content">
				<div className="quickbytes-headlines">
					<h2>{props.index}</h2>
					<p>{props.quickbytesHeadlines}</p>
				</div>
				<div className="quickbytes-border2"></div>
			</div>
		</div>
	);
}
function Quickbytes() {
	return (
		<div className="quickbytes-content">
			<div className="quickbytes-heading">
				<h2>Quick Bytes</h2>
				<svg
					width="8"
					height="14"
					viewBox="0 0 8 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0.766602 13.0667C0.599935 12.9 0.516602 12.7027 0.516602 12.4747C0.516602 12.2471 0.599935 12.05 0.766602 11.8833L5.64994 7L0.749935 2.10001C0.594379 1.94445 0.516602 1.75001 0.516602 1.51667C0.516602 1.28334 0.599935 1.08334 0.766602 0.916672C0.933268 0.750005 1.1306 0.666672 1.3586 0.666672C1.58616 0.666672 1.78327 0.750005 1.94993 0.916672L7.54994 6.53334C7.6166 6.6 7.66394 6.67223 7.69194 6.75C7.71949 6.82778 7.73327 6.91112 7.73327 7C7.73327 7.08889 7.71949 7.17223 7.69194 7.25C7.66394 7.32778 7.6166 7.4 7.54994 7.46667L1.93327 13.0833C1.77771 13.2389 1.58616 13.3167 1.3586 13.3167C1.1306 13.3167 0.933268 13.2333 0.766602 13.0667Z"
						fill="black"
					/>
				</svg>
			</div>
			<div className="quickbytes-border1"></div>
			<QuickbyteHeadlines
				index="1."
				quickbytesHeadlines="Patna metro: DMRC starts casting tunnel ring segment"
			/>
			<QuickbyteHeadlines
				index="2."
				quickbytesHeadlines="India, ADB sign $1.2 billion loan agreements "
			/>
			<QuickbyteHeadlines
				index="3."
				quickbytesHeadlines="Why China's Covid wave is stirring fear"
			/>
			<QuickbyteHeadlines
				index="4."
				quickbytesHeadlines="Ferrari faces $55 million hole after loss of sponsors"
			/>
		</div>
	);
}

export default Quickbytes;
