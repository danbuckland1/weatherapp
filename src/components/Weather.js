import React from "react";

const Weather = props => (
    <div>
    {props.city && <p className= "city">{props.city}</p>}
    {props.temperature && <p className="temp">{props.temperature}º</p>}
    {props.humidity && <p className="humidity"> Humidity: {props.humidity}%</p>}
    {props.wind && <p className="wind">Wind: {props.wind}mph</p>}
    {props.description && <p className="conditions">Conditions: {props.description}</p>}
    {props.error && <p className="error">{props.error}</p>}
  </div>
);
export default Weather;
