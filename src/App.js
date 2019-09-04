import React, {Component} from 'react';
import './App.css';
import Header from "./header/Header";
import Weather from "./weather/Weather";
import {Button} from "react-bootstrap";
import {Input} from "@material-ui/core";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {},
            isLoaded: false,
            city: ''
        }
    }


    getApiData = () => {
        const {city} = this.state
        try {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},ru&units=metric&mode=json&appid=ae5995646ac73c536581fbd2a9cdf1a0`)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        weather: data,
                        isLoaded: true
                    })
                    console.log(data)
                })
                .catch(err => {
                    if (err) return err
                })
        } catch (e) {
            console.log(e)
        }

    }

    handleChange = (e) => {
        this.setState({
            city: e.target.value
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
                <Input type="text"
                       placeholder="Enter your city :)"
                       value={this.state.city}
                       onChange={this.handleChange}
                />
                <Button variant='success' onClick={this.getApiData}>Search</Button>
                {isLoaded ? <Weather city={weather.city.name}/> : null}
            </div>
        );
    }


}

export default App;
