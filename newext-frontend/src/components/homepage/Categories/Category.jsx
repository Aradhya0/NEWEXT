import React from "react";
import Innersubchildcontainer from "./Innersubchildcontainer";
function category(props) {
	return (
		<div className="container-categories">
			<div className="outercontainer-category">
				<div className="heading-category">
					<h2>{props.categoryTitle}</h2>
					<svg
						width="8"
						height="14"
						viewBox="0 0 8 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.766602 13.0667C0.599935 12.9 0.516602 12.7027 0.516602 12.4747C0.516602 12.2471 0.599935 12.05 0.766602 11.8834L5.64994 7.00002L0.749935 2.10002C0.594379 1.94446 0.516602 1.75002 0.516602 1.51669C0.516602 1.28335 0.599935 1.08335 0.766602 0.916687C0.933268 0.75002 1.1306 0.666687 1.3586 0.666687C1.58616 0.666687 1.78327 0.75002 1.94993 0.916687L7.54994 6.53335C7.6166 6.60002 7.66394 6.67224 7.69194 6.75002C7.71949 6.8278 7.73327 6.91113 7.73327 7.00002C7.73327 7.08891 7.71949 7.17224 7.69194 7.25002C7.66394 7.3278 7.6166 7.40002 7.54994 7.46669L1.93327 13.0834C1.77771 13.2389 1.58616 13.3167 1.3586 13.3167C1.1306 13.3167 0.933268 13.2334 0.766602 13.0667Z"
							fill="black"
						/>
					</svg>
				</div>
				<div className="innercontainer-category">
					{/* previous code */}
					{/* <div className={`innersubcontainer-1  innersubcontainer1${props.Index}`}>
          <div className="inneremptysubcontainer"></div>
          <div className={`innersubcontainer-content innersubcontainer-content${props.gradientIndex}`}>
            <div className="innercontent-category">
              <h2 className="innercontent-category-headline">{props.imgHeadline}</h2>
              <p className="innercontent-category-status">{props.imgStatus}</p>
            </div>
          </div>
        </div> */}
					<div className={`innersubcontainer-1`}>
						<img src={props.imageUrl} alt="newsimage" />
						<div
							className={`innersubcontainer-content innersubcontainer-content${props.Index}`}
						>
							<div className="innercontent-category">
								<h2 className="innercontent-category-headline">
									{props.imgHeadline}
								</h2>
								<p className="innercontent-category-status">{props.imgStatus}</p>
							</div>
						</div>
					</div>
					<div className="innersubcontainer2">
						<Innersubchildcontainer
							subchildImageUrl={props.subchild1ImageUrl}
							subchildHeadline={props.subchild1Headline}
							subchildSummary={props.subchild1Summary}
							subchildStatus={props.subchild1Status}
						/>
						<Innersubchildcontainer
							subchildIndex={props.subchildkey}
							subchildImageUrl={props.subchild2ImageUrl}
							subchildHeadline={props.subchild2Headline}
							subchildSummary={props.subchild2Summary}
							subchildStatus={props.subchild2Status}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default category;
