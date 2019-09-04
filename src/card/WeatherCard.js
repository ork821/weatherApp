import React from 'react';
import {Card} from "react-bootstrap";
import './styles.css'

const WeatherCard = ({iconId}) => {
    return (
        <Card className="card">
            <Card.Img variant="top" src={`https://openweathermap.org/img/wn/${iconId}.png`} />
            <span></span>
        </Card>
    );
};

export default WeatherCard;
