import React, { useEffect, useState } from "react";
import "./Header.scss";
import search from "../../assets/icons/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../../redux/weatherSlice";
const Header = () => {
	const [cityName, setCityName] = useState("");
	const dispatch = useDispatch();

	const handleInput = () => {
		if (cityName) {
			dispatch(setCity(cityName));
		}
	};

	const handleKeyPress = (e) => {
		if (cityName) {
			if (e.keyCode == 13) {
				dispatch(setCity(cityName));
			}
		}
	};
	return (
		<div className='header'>
			<div className='header__wrapper'>
				<input
					onChange={(e) => setCityName(e.target.value)}
					onKeyDown={(e) => handleKeyPress(e)}
					className='header__wrapper__input'
					type='text'
					placeholder='City'
				/>
				<button onClick={handleInput} className='header__wrapper__btn'>
					<img
						className='header__wrapper__btn__img'
						src={search}
						alt='searchIcon'
					/>
				</button>
			</div>
		</div>
	);
};

export default Header;
