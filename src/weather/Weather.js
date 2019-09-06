import React from 'react';
import WeatherCard from "../card/WeatherCard";
import './weather.styles.css'

const Weather = ({weather}) => {
    console.log(weather)
    return (
        <div className="main">
            <h1>Your location is {weather.city.name}</h1>
            <div className="weatherField">
                {
                    weather.list.map((elem, idx) => {
                        return <WeatherCard key={idx}
                                            icon={elem.weather[0].icon}
                                            date={elem.dt * 1000} // *1000 form s to ms
                                            temp={elem.main.temp}
                                            humidity={elem.main.humidity} //влажность
                        />
                    })
                }
            </div>
        </div>
    );
};

export default Weather;
