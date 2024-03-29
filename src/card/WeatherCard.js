import React from 'react';
import './card.styles.css'

const WeatherCard = ({icon, date, wind, temp, humidity}) => {
    let weatherDate = new Date(date)
    /*Функция возвращает стрелку в зависимости от градуса направления ветра*/
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

    let DATE = weatherDate.toLocaleString().split(',');
    {/*перевод даты в понятный формат 01.01.2019, 01:01:01 и
     разделение на массив по запятой для удобной работы
      */}
    return (
        <div className='weatherCard'>
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt={icon}/>
            <span className="temp">{Math.round(temp) + '°C'}</span>
            <div className="date">Date - {DATE[0].slice(0,5)}</div> {/*дата в формате 06.01 */}
            <div className="date">Time - {DATE[1].slice(0,6)}</div> {/*время в формате 06:01 */}
            <div className="humidity">
                Humidity - {humidity}%
            </div> {/*влажность*/}
            <div className="wind">༄{wind.speed}{arrow}</div> {/*сковрость ветра и направление*/}

        </div>
    );
};

export default WeatherCard;
