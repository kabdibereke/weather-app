import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeatherData = createAsyncThunk(
	"weather/weatherStatus",
	async ({ lat, lon }) => {
		const res = await fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=9997482cca79b20022aa7eab29ab6346`,
		);

		return res.json();
	},
);

export const fetchWeatherCity = createAsyncThunk(
	"weather/cityrStatus",
	async (city) => {
		const res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9997482cca79b20022aa7eab29ab6346`,
		);

		return res.json();
	},
);

const initialState = {
	weatherData: [],
	cityData: [],
	status: "loading",
	lat: null,
	lon: null,
	city: "karagandy",
};

export const weatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {
		setCity(state, action) {
			state.city = action.payload;
		},
	},
	extraReducers: {
		[fetchWeatherData.pending]: (state) => {
			state.status = "loading";
		},
		[fetchWeatherData.fulfilled]: (state, action) => {
			state.weatherData = action.payload;
			state.status = "success";
		},
		[fetchWeatherData.rejected]: (state) => {
			state.weatherData = "error";
		},
		[fetchWeatherCity.fulfilled]: (state, action) => {
			state.cityData = action.payload;
			state.lat = state.cityData.coord.lat;
			state.lon = state.cityData.coord.lon;
		},
	},
});

export const { setCity } = weatherSlice.actions;

export default weatherSlice.reducer;
