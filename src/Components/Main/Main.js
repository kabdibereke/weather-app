import { useEffect, useState } from "react";
import "./Main.scss";
import Header from "../Header/Header";
import sun from "../../assets/img/sun.svg";
import Option from "../Option/Option";
import rainfall from "../../assets/icons/rainfall.svg";
import wind from "../../assets/icons/wind.svg";
import humidity from "../../assets/icons/humidity.svg";
import HourForecast from "../HourForecast/HourForecast";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../../redux/weatherSlice";
import { fetchWeatherCity } from "../../redux/weatherSlice";
import { Link } from "react-router-dom";
import Skeleton from "../../assets/Skeleton";

const Main = () => {
	const dispatch = useDispatch();
	const { city, status, lat, lon, cityData, weatherData } = useSelector(
		(state) => state.weather,
	);
	useEffect(() => {
		dispatch(fetchWeatherCity(city));
	}, [city]);
	useEffect(() => {
		if (lat && lon) {
			dispatch(fetchWeatherData({ lat, lon }));
		}
	}, [lat, lon]);
	console.log(weatherData);

	return (
		<div className='main'>
			<div className='container'>
				<div className='main__wrapper'>
					<Header />
					{status === "loading" && <Skeleton />}
					{status === "error" && <div>error</div>}
					{status === "success" && (
						<>
							<div className='main__wrapper__cityName'>
								<p className='city'>
									{cityData?.name},{cityData?.sys.country}
								</p>
								<p className='date'>{new Date().toString().substring(0, 10)}</p>
							</div>
							<div className='main__wrapper__degree'>
								<img
									className='degree__img'
									src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
									alt='sun'
								/>
								<div className='degree__wrapper'>
									<p className='degree__wrapper__temp'>
										{Math.round(weatherData.current.temp - 272)}°
									</p>
									<p className='degree__wrapper__status'>
										{weatherData.current.weather[0].description}
									</p>
								</div>
							</div>
							<div className='main__wrapper__param'>
								<Option
									name={"Rainfall"}
									img={rainfall}
									param={
										weatherData.current.pop
											? weatherData.current.pop + "cm"
											: "0 cm"
									}
								/>
								<Option
									name={"Wind"}
									img={wind}
									param={weatherData.current.wind_speed + "km/h"}
								/>
								<Option
									name={"Humidity"}
									img={humidity}
									param={weatherData.current.humidity + "%"}
								/>
							</div>
							<div className='main__wrapper__nav'>
								<Link to='/days' className='nav__next'>
									Next 7 Days
								</Link>
							</div>
							<div className='main__wrapper__hourForecast'>
								{weatherData.hourly.map((item) => {
									return (
										<HourForecast
											key={item.dt}
											hour={item.dt}
											icon={item.weather[0].icon}
											temp={item.temp}
										/>
									);
								})}
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Main;
