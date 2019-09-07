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
            lat: NaN,
            lon: NaN,
        }
    }

    componentDidMount() {
        this.getApiData()
    }

    getApiData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude
            let lon = position.coords.longitude
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&mode=json&appid=ae5995646ac73c536581fbd2a9cdf1a0`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        weather: data,
                        isLoaded: true
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        })
    }


    render() {
        const {isLoaded, weather} = this.state

        return (
            <div className="App">
                <Header header="Hey, nice to see you"
                        text={`This is simple weather app! We use React from our app.
                Try it right now! :)`}
                />
                {isLoaded ? <Weather weather={weather}/> : null}
            </div>
        );
    }


}

export default App;
