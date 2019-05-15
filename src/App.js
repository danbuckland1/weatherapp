import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "36dbbff2a2e5a9bebe554ceb74148e4f";

class App extends React.Component {
  // state = {
  //   temperature: undefined,
  //   city: undefined,
  //   humidity: undefined,
  //   description: undefined,
  //   error: undefined
  // };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`
    );
    const data = await api_call.json();
    console.log(data);
    // this.setState({
    //   temperature: data.main.temperature,
    //   city: data.name,
    //   humidity: data.main.humidity,
    //   description: data.weather[0].description,
    //   error: ""
    // });
  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          // temperature={this.state.temperature}
          // city={this.state.city}
          // country={this.state.country}
          // humidity={this.state.humidity}
          // description={this.state.description}
          // error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
