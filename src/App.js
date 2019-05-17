import React  from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "36dbbff2a2e5a9bebe554ceb74148e4f";


class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`
    );

    const data = await api_call.json();
    if (city) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        wind: undefined,
        description: undefined,
        error: "Please enter a city"
      });
    }
    
    console.log(data);
  };

  render() {
    return (
      <div>
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          humidity={this.state.humidity}
          description={this.state.description}
          wind={this.state.wind}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
