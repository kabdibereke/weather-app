import React from "react";
import "./Option.scss";
const Option = ({ name, img, param }) => {
	return (
		<div className='option'>
			<div className='option__param'>
				<img
					className={
						name == "Humidity"
							? "option__param__humidity"
							: "option__param__icon"
					}
					src={img}
					alt='rainfall'
				/>
				<p className='option__param__text'>{name}</p>
			</div>
			<div className='option__result'>{param}</div>
		</div>
	);
};

export default Option;
