import sun from "../../assets/img/sun.svg";
import "./HourForecast.scss";
const HourForecast = ({ hour, icon, temp }) => {
	return (
		<div className='hourForecast'>
			<p className='hourForecast__hour'>
				{new Date(hour * 1000).getHours() + ":00"}
			</p>
			<img
				className='hourForecast__img'
				src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
				alt='img'
			/>
			<p className='hourForecast__temp'>{Math.round(temp - 272)}°</p>
		</div>
	);
};

export default HourForecast;
