import React from 'react';
import WeatherCard from "../card/WeatherCard";
import './styles.css'

const Weather = ({weather}) => {
    console.log(weather)
    return (
        <div className="weatherField">
            <h1>Your city is {weather.city.name}</h1>
            {
                weather.list.map((elem, idx) => {
                    return <WeatherCard key={idx} icon={elem.weather[0].icon}/>
                })
            }
        </div>
    );
};

export default Weather;
