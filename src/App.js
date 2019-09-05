import React, {Component} from 'react';
import './App.css';
import Header from "./header/Header";
import Weather from "./weather/Weather";
import {Button} from "react-bootstrap";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {},
            isLoaded: false,
            lat: '',
            lon: '',
        }
    }

    getUserCity = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude
            let lon = position.coords.longitude
            lat = Number(lat)
            lon = Number(lon)
            this.setState({
                lat: lat,
                lon: lon,
            })
        });
    }


    getApiData = () => {
        const {lat, lon} = this.state
        console.log(typeof lat)
        this.getUserCity();
        try {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&mode=json&appid=ae5995646ac73c536581fbd2a9cdf1a0`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        weather: data,
                        isLoaded: true
                    })
                    console.log(data)
                })
                .catch(err => {
                    console.log(err)
                })
        } catch (e) {
            console.log(e)
        }

    }


    render() {
        const {isLoaded, weather} = this.state

        return (
            <div className="App">
                <Header header="Hey, nice to see you"
                        text={`This is simple weather app! We use React from our app.
                Try it right now! :)`}
                />
                <Button variant='success' onClick={this.getApiData}>Определить город</Button>
                {isLoaded ? <Weather city={weather.name}/> : null}
            </div>
        );
    }


}

export default App;
