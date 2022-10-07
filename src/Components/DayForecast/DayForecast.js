import "./DayForecast.scss";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";
import DayOption from "../DayOption/DayOption";
import { useSelector } from "react-redux";

const DayForecast = () => {
	const { weatherData } = useSelector((state) => state.weather);
	console.log(weatherData);
	return (
		<div className='main'>
			<div className='container'>
				<div className='main__wrapper dayForecast__wrapper'>
					<div className='dayForecast__wrapper__header'>
						<Link to='/' className='header__arrow'>
							<img className='header__arrow__img' src={arrow} alt='arrow' />
						</Link>
						<p className='header__title'>Next 7 Days</p>
					</div>
					<div className='dayForecast__wrapper__content'>
						{weatherData?.daily.slice(1, 8).map((item) => {
							return (
								<DayOption
									key={item.dt}
									humidity={item.humidity}
									wind_speed={item.wind_speed}
									temp={item.temp.day}
									icon={item.weather[0].icon}
									pop={item.pop}
									dt={item.dt}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DayForecast;
