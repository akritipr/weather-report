'use strict';

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Temperature from './components/temperature/temperature.js';
import Heading from './components/heading/heading.js';
import Image from './components/image/image.js';
import Location from './components/location/location.js';
import Forecast from './components/forecast/forecast.js';
import './main.css';

// var Weather = React.createClass({
// 	render:function(){
// 		return(
// 			<div><Temperature/></div>
// 			)
// 	}

// });
//
const API_KEY = '079ef9f729cc803c0140a36ea9b74a39';

class Weather extends Component{
	constructor(props){
		super(props);
		this.state = {
			currentCity : '',
			currentCountry : '',
			currentZip : '',
			currentCoordinates : '',
			displayedTemp : '',
			weatherMain : '',
			weatherDesc : '',
			weatherId : '',
			weatherType : '',
			lon : '',
			lat : ''
		}
	}
	fetchUserLocation(){
		var userLoc = fetch('http://ip-api.com/json').then(results => 
			{
				return results.json();
			}).then(response => 
			{
				console.log(response);
				this.setState({
					currentCity : response.city,
					currentCountry : response.countryCode,
					currentZip : response.zip,
					currentCoordinates : response.lat + "  " + response.lon,
					lon : response.lon,
					lat : response.lat
				});
				this.fetchWeatherDetails(response.lat, response.lon);
			});
		
	}
	fetchWeatherDetails(lat,lon){
		const api_call = fetch('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&appid=' + API_KEY).then(results=>{
			return results.json();
		}).then(response=>{
			this.setState({
					displayedTemp : response.main.temp,
					weatherMain :  response.weather[0].main,
					weatherDesc :  response.weather[0].description,
					weatherId : response.weather[0].id
				});

			if(this.state.weatherId > 800 && this.state.weatherId <=804){
				this.setState({weatherType : 'Cloud'})
			}else if(this.state.weatherId == 800){
				this.setState({weatherType : 'Clear'})
			}else if((this.state.weatherId > 600 && this.state.weatherId <602)||(this.state.weatherId == 611) || 
				(this.state.weatherId ==612) ||(this.state.weatherId == 615)||(this.state.weatherId == 616)||(this.state.weatherId > 620 && this.state.weatherId < 622) ){
				this.setState({weatherType : 'Snow'})
			}else if(this.state.weatherId > 500 && this.state.weatherId < 504){
				this.setState({weatherType : 'Rain'})
			}
		});
	}
	componentWillMount(){
		this.fetchUserLocation()
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log("shouldComponentUpdate", nextProps, nextState);
		if(this.state.currentZip != nextState.currentZip || this.state.displayedTemp != nextState.displayedTemp 
			|| (this.state.weatherType != nextState.currentZip)){
			return true;
		}else{
			return false;
		}
	}

	render(){
		return(
			<div className="app-background">
				
				<Heading updateWeather={this.state.weatherMain} updateWeatherDesc={this.state.weatherDesc} />
				<Image updateId='{this.state.weatherType}'/>
				<Temperature updateTemp={this.state.displayedTemp}/>
				<Location updateCoordinates={this.state.currentCoordinates} updateCity={this.state.currentCity} updateCountry={this.state.currentCountry}/>
			</div>
			)
	}
}

export default Weather;

ReactDOM.render(<Weather/>, document.getElementById("app"))
