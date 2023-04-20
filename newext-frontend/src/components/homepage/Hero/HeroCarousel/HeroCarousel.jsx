import React, { useEffect, useState } from "react";
import "./heroCarousel.css";
import { Carousel } from "react-bootstrap";
import axios from "axios";

export default function HeroCarousel() {
	const [dataCarousel, setdataCarousel] = useState();
	useEffect(() => {
		const fnc = async () => {
			const { data } = await axios.get(
				`http://localhost:9876/news/getnews?lang=en&category=sports`
			);
			setdataCarousel(data.result);
		};
		fnc();
	}, []);

	return (
		<div>
			<Carousel fade className="carousel-mask">
				{dataCarousel?.slice(0, 5).map((e, index) => (
					<Carousel.Item interval={3000}>
						<img src={e.image} alt="First slide" />
						<Carousel.Caption>
							<h3>{e.title}</h3>
							<p>{e.content}</p>
							<a href={e.readMore}>Read more...</a>
						</Carousel.Caption>
						<div className="carousel-gradient-container"></div>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
}
