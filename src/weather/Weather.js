import React from 'react';
import WeatherCard from "../card/WeatherCard";
import './styles.css'

const Weather = ({data, city}) => {
    return (
        <div className="weatherField">
            <h1>Your city is {city}</h1>
            <WeatherCard iconId={'04d'}/>
        </div>
    );
};

export default Weather;
