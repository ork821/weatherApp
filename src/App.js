import React, {Component} from 'react';
import './App.css';
import Header from "./header/Header";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: null
        }
    }


    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=Moscow,ru&mode=json&appid=ae5995646ac73c536581fbd2a9cdf1a0')
            .then(res => res.json())
            .then(data => console.log(data))
    }


    render() {
        return (
            <div className="App">
                <Header header="Hey, nice to see you"
                        text={`This is simple weather app! We use React from our app.
                Try it right now! :)`}
                />
            </div>
        );
    }


}

export default App;
