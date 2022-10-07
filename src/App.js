import Main from "./Components/Main/Main";
import DayForecast from "./Components/DayForecast/DayForecast";
import { Routes, Route } from "react-router-dom";
function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/days' element={<DayForecast />} />
			</Routes>
		</div>
	);
}

export default App;
