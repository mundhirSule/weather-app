import React from "react";

function Container(props) {
	return (
		<div className="container">
			<img src={props.icon} alt="" id="weather-icon"></img>
			<div id="location">{props.location}</div>

			<div className="desc">{props.description}</div>
			<div className="weather">
				<div className="c">{props.tempC}</div>
				<div className="circle"></div>
				<div className="f">{props.tempF}</div>
			</div>
			<div className="info">
				<h4>
					Sunrise: <span className="sunrise">{props.sunrise}</span>
				</h4>
				<h4>
					Sunset: <span className="sunset">{props.sunset}</span>
				</h4>
			</div>
		</div>
	);
}

export default Container;
