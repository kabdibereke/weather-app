import "./DayOption.scss";
import rainfall_icon from "../../assets/icons/rainfall.svg";
import wind_icon from "../../assets/icons/wind.svg";
import humidity_icon from "../../assets/icons/humidity.svg";
const DayOption = ({ humidity, wind_speed, temp, icon, pop, dt }) => {
	const getWeekDay = () => {
		const days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		const date = new Date(dt * 1000);
		for (let j = 0; j <= days.length; j++) {
			if (date.getDay() == j) {
				if (date.getDate() - new Date().getDate() == 1) {
					return "Tommorow";
				}
				return days[j];
			}
		}
	};
	return (
		<div className='dayOption'>
			<div className='dayOption__wrapper'>
				<div className='dayOption__wrapper__temp'>
					<p className='day'>{getWeekDay()}</p>
					<div className='temp__wrapper'>
						<p className='temp__wrapper__temperature'>
							{Math.round(temp - 272) + "°"}
						</p>
						<img
							className='temp__wrapper__img'
							src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
							alt=''
						/>
					</div>
				</div>
				<div className='dayOption__wrapper__info'>
					<div className='rainfull__wrapper'>
						<img
							className='rainfull__wrapper__img'
							src={rainfall_icon}
							alt='rainfall'
						/>
						<p className='rainfull__wrapper__param'>{pop} cm</p>
					</div>
					<div className='wind__wrapper'>
						<img className='wind__wrapper__img' src={wind_icon} alt='wind' />
						<p className='wind__wrapper__param'>{wind_speed} km/h</p>
					</div>
					<div className='humidity__wrapper'>
						<img
							className='humidity__wrapper__img'
							src={humidity_icon}
							alt='humidity'
						/>
						<p className='humidity__wrapper__param'>{humidity} %</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DayOption;
