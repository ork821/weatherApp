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
                                            icon={elem.weather[0].icon} //иконка
                                            date={elem.dt * 1000} // *1000 из s в ms
                                            temp={elem.main.temp} //средняя температура
                                            humidity={elem.main.humidity} //влажность
                                            wind={elem.wind}

                        />
                    })
                }
            </div>
        </div>
    );
};

export default Weather;
