import React from 'react';
import './card.styles.css'
import {round} from "react-toolbox/components/utils";

const WeatherCard = ({icon, date, wind, temp, humidity}) => {
    let weatherDate = new Date(date)
    return (
        <div className='weatherCard'>
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt={icon}/>
            <span className="temp">{Math.round(temp) + '°C'}</span>
            <div className="date">{weatherDate.toLocaleString()}</div>


        </div>
    );
};

export default WeatherCard;
