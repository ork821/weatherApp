import React, {Component} from 'react';
import './App.css';
import Header from "./header/Header";
import Weather from "./weather/Weather";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {}
        }
    }


    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=Moscow,ru&units=metric&mode=json&appid=ae5995646ac73c536581fbd2a9cdf1a0')
            .then(res => res.json())
            .then(data => this.setState({
                weather: data
            }))
    }


    render() {
        const data = this.state.weather
        console.log(data)
        return (
            <div className="App">
                <Header header="Hey, nice to see you"
                        text={`This is simple weather app! We use React from our app.
                Try it right now! :)`}
                />
                <Weather/>
            </div>
        );
    }


}

export default App;
