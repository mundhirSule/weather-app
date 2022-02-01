import React, { useEffect, useState } from "react";
import Container from "./Container";
import "./style.css";

function App() {
	//latitude and longitude variables
	let lat, longi;
	const [getData, setGetData] = useState({
		icon: " ",
		description: "",
		temp: "",
		location: "",
		sunrise: "",
		sunset: "",
	});
	//Api key
	const api = "9d5dd0377b5d4fbb3d0e7b699194f04d";

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				lat = position.coords.latitude;
				longi = position.coords.longitude;

				const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${longi}&appid=${api}&units=metric`;
				fetch(base)
					.then((res) => res.json())
					.then((data) =>
						setGetData((prevData) => ({
							...prevData,
							icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
							description: data.weather[0].description,
							temp: data.main.temp,
							location: data.name,
							sunrise: data.sys.sunrise,
							sunset: data.sys.sunset,
						}))
					);
			});
		}
	}, []);

	//converting celsius to farenheit
	const fahrenheit = (getData.temp * 9) / 5 + 32;
	const tempC = getData.temp * 1;

	// Converting Epoch(Unix) time to GMT
	const sunriseGMT = new Date(getData.sunrise * 1000);
	const sunsetGMT = new Date(getData.sunset * 1000);

	return (
		<Container
			icon={getData.icon}
			description={getData.description}
			tempC={`${tempC.toFixed(2)} °C`}
			tempF={`${fahrenheit.toFixed(2)} °F`}
			location={getData.location}
			sunrise={`${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`}
			sunset={`${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`}
		/>
	);
}

export default App;
