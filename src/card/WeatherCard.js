import React from 'react';
import './card.styles.css'

const WeatherCard = ({icon}) => {
    return (
        <div className='weatherCard'>
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} />
        </div>
    );
};

export default WeatherCard;
