import React from 'react';
import './card.styles.css'

const WeatherCard = ({icon, date, wind, temp, humidity}) => {
    let weatherDate = new Date(date)
    function getWindArrow() {
        let windDegree = wind.deg
        if ((windDegree >= 0) && (windDegree < 15)) {
            return '→'
        } else if ((windDegree >= 15) && (windDegree < 75)) {
            return '↗'
        } else if ((windDegree >= 75) && (windDegree < 105)) {
            return '↑'
        } else if ((windDegree >= 105) && (windDegree < 165)) {
            return '↖'
        } else if ((windDegree >= 165) && (windDegree < 195)) {
            return '←'
        } else if ((windDegree >= 195) && (windDegree < 255)) {
            return '↙'
        } else if ((windDegree >= 255) && (windDegree < 285)) {
            return '↓'
        } else if ((windDegree >= 285) && (windDegree < 345)) {
            return '↘'
        } else if (windDegree >= 345) {
            return '→'
        }
    }
    let arrow = getWindArrow()

    return (
        <div className='weatherCard'>
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt={icon}/>
            <span className="temp">{Math.round(temp) + '°C'}</span>
            <div className="date">{weatherDate.toLocaleString()}</div>
            <div className="humidity">&#128167;{humidity}%</div> {/*влажность*/}
            <div className="wind">༄{wind.speed}{arrow}</div>

        </div>
    );
};

export default WeatherCard;
