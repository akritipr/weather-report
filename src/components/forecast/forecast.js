import React, {Component} from 'react';


const API_KEY = '079ef9f729cc803c0140a36ea9b74a39';

class Forecast extends Component{
	constructor(props){
		super(props);
		this.state = {
			latcoordinates : this.props.latcoordinates,
			loncoordinates : this.props.loncoordinates
		}
	}


	getForecast(){
		// const api_call = fetch('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?lat='+this.props.latcoordinates+'&lon='+this.props.loncoordinates+'&units=metric&appid=' + API_KEY).then(results=>{
		// 	return results.json();
		// }).then(response=>{
			

			
		// 	console.log("weather response"+response);
		// });

		let response = {
	"cod": "200",
	"message": 0.004,
	"cnt": 40,
	"list": [{
		"dt": 1523491200,
		"main": {
			"temp": 5.46,
			"temp_min": 4.63,
			"temp_max": 5.46,
			"pressure": 1011.07,
			"sea_level": 1029.77,
			"grnd_level": 1011.07,
			"humidity": 84,
			"temp_kf": 0.83
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10n"
		}],
		"clouds": {
			"all": 88
		},
		"wind": {
			"speed": 5.08,
			"deg": 254.001
		},
		"rain": {
			"3h": 0.465
		},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-12 00:00:00"
	}, {
		"dt": 1523502000,
		"main": {
			"temp": 3.57,
			"temp_min": 2.95,
			"temp_max": 3.57,
			"pressure": 1011.51,
			"sea_level": 1030.32,
			"grnd_level": 1011.51,
			"humidity": 96,
			"temp_kf": 0.62
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10n"
		}],
		"clouds": {
			"all": 48
		},
		"wind": {
			"speed": 1.26,
			"deg": 271.002
		},
		"rain": {
			"3h": 0.38
		},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-12 03:00:00"
	}, {
		"dt": 1523512800,
		"main": {
			"temp": -0.33,
			"temp_min": -0.75,
			"temp_max": -0.33,
			"pressure": 1011.13,
			"sea_level": 1030.1,
			"grnd_level": 1011.13,
			"humidity": 98,
			"temp_kf": 0.41
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 0.99,
			"deg": 124.503
		},
		"rain": {},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-12 06:00:00"
	}, {
		"dt": 1523523600,
		"main": {
			"temp": -1.35,
			"temp_min": -1.56,
			"temp_max": -1.35,
			"pressure": 1010.14,
			"sea_level": 1029.12,
			"grnd_level": 1010.14,
			"humidity": 95,
			"temp_kf": 0.21
		},
		"weather": [{
			"id": 803,
			"main": "Clouds",
			"description": "broken clouds",
			"icon": "04n"
		}],
		"clouds": {
			"all": 56
		},
		"wind": {
			"speed": 1.38,
			"deg": 113.501
		},
		"rain": {},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-12 09:00:00"
	}, {
		"dt": 1523534400,
		"main": {
			"temp": 2.66,
			"temp_min": 2.66,
			"temp_max": 2.66,
			"pressure": 1007.72,
			"sea_level": 1026.68,
			"grnd_level": 1007.72,
			"humidity": 94,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10d"
		}],
		"clouds": {
			"all": 92
		},
		"wind": {
			"speed": 3.61,
			"deg": 134
		},
		"rain": {
			"3h": 0.915
		},
		"snow": {
			"3h": 0.00025
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-12 12:00:00"
	}, {
		"dt": 1523545200,
		"main": {
			"temp": 7.57,
			"temp_min": 7.57,
			"temp_max": 7.57,
			"pressure": 1004.9,
			"sea_level": 1023.54,
			"grnd_level": 1004.9,
			"humidity": 88,
			"temp_kf": 0
		},
		"weather": [{
			"id": 501,
			"main": "Rain",
			"description": "moderate rain",
			"icon": "10d"
		}],
		"clouds": {
			"all": 92
		},
		"wind": {
			"speed": 6.22,
			"deg": 195.5
		},
		"rain": {
			"3h": 4.865
		},
		"snow": {},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-12 15:00:00"
	}, {
		"dt": 1523556000,
		"main": {
			"temp": 9.48,
			"temp_min": 9.48,
			"temp_max": 9.48,
			"pressure": 1001.83,
			"sea_level": 1020.19,
			"grnd_level": 1001.83,
			"humidity": 81,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10d"
		}],
		"clouds": {
			"all": 100
		},
		"wind": {
			"speed": 9.26,
			"deg": 219.503
		},
		"rain": {
			"3h": 0.925
		},
		"snow": {},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-12 18:00:00"
	}, {
		"dt": 1523566800,
		"main": {
			"temp": 11.82,
			"temp_min": 11.82,
			"temp_max": 11.82,
			"pressure": 1000.1,
			"sea_level": 1018.28,
			"grnd_level": 1000.1,
			"humidity": 72,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10d"
		}],
		"clouds": {
			"all": 88
		},
		"wind": {
			"speed": 11.06,
			"deg": 231.504
		},
		"rain": {
			"3h": 0.635
		},
		"snow": {},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-12 21:00:00"
	}, {
		"dt": 1523577600,
		"main": {
			"temp": 12.74,
			"temp_min": 12.74,
			"temp_max": 12.74,
			"pressure": 1001.15,
			"sea_level": 1019.2,
			"grnd_level": 1001.15,
			"humidity": 74,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10n"
		}],
		"clouds": {
			"all": 92
		},
		"wind": {
			"speed": 10.51,
			"deg": 246.003
		},
		"rain": {
			"3h": 0.34
		},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-13 00:00:00"
	}, {
		"dt": 1523588400,
		"main": {
			"temp": 10.99,
			"temp_min": 10.99,
			"temp_max": 10.99,
			"pressure": 1004.93,
			"sea_level": 1023.22,
			"grnd_level": 1004.93,
			"humidity": 76,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10n"
		}],
		"clouds": {
			"all": 56
		},
		"wind": {
			"speed": 5.34,
			"deg": 270.501
		},
		"rain": {
			"3h": 0.030000000000001
		},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-13 03:00:00"
	}, {
		"dt": 1523599200,
		"main": {
			"temp": 7.15,
			"temp_min": 7.15,
			"temp_max": 7.15,
			"pressure": 1007.84,
			"sea_level": 1026.4,
			"grnd_level": 1007.84,
			"humidity": 79,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10n"
		}],
		"clouds": {
			"all": 76
		},
		"wind": {
			"speed": 2.71,
			"deg": 288.504
		},
		"rain": {
			"3h": 0.004999999999999
		},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-13 06:00:00"
	}, {
		"dt": 1523610000,
		"main": {
			"temp": 4.54,
			"temp_min": 4.54,
			"temp_max": 4.54,
			"pressure": 1008.37,
			"sea_level": 1027.02,
			"grnd_level": 1008.37,
			"humidity": 93,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10n"
		}],
		"clouds": {
			"all": 92
		},
		"wind": {
			"speed": 1.03,
			"deg": 15.5008
		},
		"rain": {
			"3h": 1.055
		},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-13 09:00:00"
	}, {
		"dt": 1523620800,
		"main": {
			"temp": 3.71,
			"temp_min": 3.71,
			"temp_max": 3.71,
			"pressure": 1009.73,
			"sea_level": 1028.48,
			"grnd_level": 1009.73,
			"humidity": 97,
			"temp_kf": 0
		},
		"weather": [{
			"id": 501,
			"main": "Rain",
			"description": "moderate rain",
			"icon": "10d"
		}],
		"clouds": {
			"all": 100
		},
		"wind": {
			"speed": 2.81,
			"deg": 53.5107
		},
		"rain": {
			"3h": 3.06
		},
		"snow": {},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-13 12:00:00"
	}, {
		"dt": 1523631600,
		"main": {
			"temp": 6.31,
			"temp_min": 6.31,
			"temp_max": 6.31,
			"pressure": 1009.26,
			"sea_level": 1028.1,
			"grnd_level": 1009.26,
			"humidity": 94,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10d"
		}],
		"clouds": {
			"all": 88
		},
		"wind": {
			"speed": 2.96,
			"deg": 90.5042
		},
		"rain": {
			"3h": 1.365
		},
		"snow": {},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-13 15:00:00"
	}, {
		"dt": 1523642400,
		"main": {
			"temp": 10.8,
			"temp_min": 10.8,
			"temp_max": 10.8,
			"pressure": 1008.29,
			"sea_level": 1026.99,
			"grnd_level": 1008.29,
			"humidity": 78,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10d"
		}],
		"clouds": {
			"all": 88
		},
		"wind": {
			"speed": 2.51,
			"deg": 65.5027
		},
		"rain": {
			"3h": 0.040000000000001
		},
		"snow": {},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-13 18:00:00"
	}, {
		"dt": 1523653200,
		"main": {
			"temp": 12.55,
			"temp_min": 12.55,
			"temp_max": 12.55,
			"pressure": 1008.39,
			"sea_level": 1027.06,
			"grnd_level": 1008.39,
			"humidity": 74,
			"temp_kf": 0
		},
		"weather": [{
			"id": 802,
			"main": "Clouds",
			"description": "scattered clouds",
			"icon": "03d"
		}],
		"clouds": {
			"all": 48
		},
		"wind": {
			"speed": 2.26,
			"deg": 29.5002
		},
		"rain": {},
		"snow": {},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-13 21:00:00"
	}, {
		"dt": 1523664000,
		"main": {
			"temp": 11.83,
			"temp_min": 11.83,
			"temp_max": 11.83,
			"pressure": 1007.05,
			"sea_level": 1025.76,
			"grnd_level": 1007.05,
			"humidity": 77,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10n"
		}],
		"clouds": {
			"all": 88
		},
		"wind": {
			"speed": 1.37,
			"deg": 127
		},
		"rain": {
			"3h": 0.0099999999999998
		},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-14 00:00:00"
	}, {
		"dt": 1523674800,
		"main": {
			"temp": 11.97,
			"temp_min": 11.97,
			"temp_max": 11.97,
			"pressure": 1007.09,
			"sea_level": 1025.93,
			"grnd_level": 1007.09,
			"humidity": 73,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10n"
		}],
		"clouds": {
			"all": 80
		},
		"wind": {
			"speed": 1.08,
			"deg": 183.001
		},
		"rain": {
			"3h": 0.1
		},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-14 03:00:00"
	}, {
		"dt": 1523685600,
		"main": {
			"temp": 12.42,
			"temp_min": 12.42,
			"temp_max": 12.42,
			"pressure": 1006.7,
			"sea_level": 1025.25,
			"grnd_level": 1006.7,
			"humidity": 69,
			"temp_kf": 0
		},
		"weather": [{
			"id": 802,
			"main": "Clouds",
			"description": "scattered clouds",
			"icon": "03n"
		}],
		"clouds": {
			"all": 36
		},
		"wind": {
			"speed": 2.76,
			"deg": 209.008
		},
		"rain": {},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-14 06:00:00"
	}, {
		"dt": 1523696400,
		"main": {
			"temp": 12.12,
			"temp_min": 12.12,
			"temp_max": 12.12,
			"pressure": 1006.79,
			"sea_level": 1025.3,
			"grnd_level": 1006.79,
			"humidity": 67,
			"temp_kf": 0
		},
		"weather": [{
			"id": 800,
			"main": "Clear",
			"description": "clear sky",
			"icon": "01n"
		}],
		"clouds": {
			"all": 0
		},
		"wind": {
			"speed": 3.67,
			"deg": 221.004
		},
		"rain": {},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-14 09:00:00"
	}, {
		"dt": 1523707200,
		"main": {
			"temp": 12.44,
			"temp_min": 12.44,
			"temp_max": 12.44,
			"pressure": 1008.82,
			"sea_level": 1027.3,
			"grnd_level": 1008.82,
			"humidity": 68,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10d"
		}],
		"clouds": {
			"all": 92
		},
		"wind": {
			"speed": 4.11,
			"deg": 237.001
		},
		"rain": {
			"3h": 0.28
		},
		"snow": {},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-14 12:00:00"
	}, {
		"dt": 1523718000,
		"main": {
			"temp": 11.65,
			"temp_min": 11.65,
			"temp_max": 11.65,
			"pressure": 1010.64,
			"sea_level": 1029.26,
			"grnd_level": 1010.64,
			"humidity": 84,
			"temp_kf": 0
		},
		"weather": [{
			"id": 501,
			"main": "Rain",
			"description": "moderate rain",
			"icon": "10d"
		}],
		"clouds": {
			"all": 92
		},
		"wind": {
			"speed": 3.16,
			"deg": 226.002
		},
		"rain": {
			"3h": 7.865
		},
		"snow": {},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-14 15:00:00"
	}, {
		"dt": 1523728800,
		"main": {
			"temp": 9.47,
			"temp_min": 9.47,
			"temp_max": 9.47,
			"pressure": 1011.32,
			"sea_level": 1030.02,
			"grnd_level": 1011.32,
			"humidity": 92,
			"temp_kf": 0
		},
		"weather": [{
			"id": 501,
			"main": "Rain",
			"description": "moderate rain",
			"icon": "10d"
		}],
		"clouds": {
			"all": 100
		},
		"wind": {
			"speed": 5.96,
			"deg": 74.5063
		},
		"rain": {
			"3h": 7.745
		},
		"snow": {},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-14 18:00:00"
	}, {
		"dt": 1523739600,
		"main": {
			"temp": 5.52,
			"temp_min": 5.52,
			"temp_max": 5.52,
			"pressure": 1011.21,
			"sea_level": 1029.85,
			"grnd_level": 1011.21,
			"humidity": 91,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10d"
		}],
		"clouds": {
			"all": 92
		},
		"wind": {
			"speed": 7.48,
			"deg": 69.5019
		},
		"rain": {
			"3h": 1.55
		},
		"snow": {},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-14 21:00:00"
	}, {
		"dt": 1523750400,
		"main": {
			"temp": 3.51,
			"temp_min": 3.51,
			"temp_max": 3.51,
			"pressure": 1011.71,
			"sea_level": 1030.19,
			"grnd_level": 1011.71,
			"humidity": 94,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10n"
		}],
		"clouds": {
			"all": 92
		},
		"wind": {
			"speed": 7.16,
			"deg": 71
		},
		"rain": {
			"3h": 0.985
		},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-15 00:00:00"
	}, {
		"dt": 1523761200,
		"main": {
			"temp": 2.4,
			"temp_min": 2.4,
			"temp_max": 2.4,
			"pressure": 1012.67,
			"sea_level": 1031.48,
			"grnd_level": 1012.67,
			"humidity": 98,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10n"
		}],
		"clouds": {
			"all": 92
		},
		"wind": {
			"speed": 8.32,
			"deg": 66.5014
		},
		"rain": {
			"3h": 1.72
		},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-15 03:00:00"
	}, {
		"dt": 1523772000,
		"main": {
			"temp": 1.65,
			"temp_min": 1.65,
			"temp_max": 1.65,
			"pressure": 1010.83,
			"sea_level": 1029.52,
			"grnd_level": 1010.83,
			"humidity": 100,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10n"
		}],
		"clouds": {
			"all": 92
		},
		"wind": {
			"speed": 8.33,
			"deg": 68.5167
		},
		"rain": {
			"3h": 1.925
		},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-15 06:00:00"
	}, {
		"dt": 1523782800,
		"main": {
			"temp": 2.05,
			"temp_min": 2.05,
			"temp_max": 2.05,
			"pressure": 1007.54,
			"sea_level": 1026.23,
			"grnd_level": 1007.54,
			"humidity": 98,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10n"
		}],
		"clouds": {
			"all": 80
		},
		"wind": {
			"speed": 8.28,
			"deg": 75.0003
		},
		"rain": {
			"3h": 2.465
		},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-15 09:00:00"
	}, {
		"dt": 1523793600,
		"main": {
			"temp": 3.29,
			"temp_min": 3.29,
			"temp_max": 3.29,
			"pressure": 1006.02,
			"sea_level": 1024.52,
			"grnd_level": 1006.02,
			"humidity": 95,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10d"
		}],
		"clouds": {
			"all": 92
		},
		"wind": {
			"speed": 6.26,
			"deg": 78.506
		},
		"rain": {
			"3h": 2.465
		},
		"snow": {},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-15 12:00:00"
	}, {
		"dt": 1523804400,
		"main": {
			"temp": 5.49,
			"temp_min": 5.49,
			"temp_max": 5.49,
			"pressure": 1004.84,
			"sea_level": 1023.44,
			"grnd_level": 1004.84,
			"humidity": 94,
			"temp_kf": 0
		},
		"weather": [{
			"id": 501,
			"main": "Rain",
			"description": "moderate rain",
			"icon": "10d"
		}],
		"clouds": {
			"all": 100
		},
		"wind": {
			"speed": 5.11,
			"deg": 81.0015
		},
		"rain": {
			"3h": 3.56
		},
		"snow": {},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-15 15:00:00"
	}, {
		"dt": 1523815200,
		"main": {
			"temp": 6.93,
			"temp_min": 6.93,
			"temp_max": 6.93,
			"pressure": 1003.53,
			"sea_level": 1022.17,
			"grnd_level": 1003.53,
			"humidity": 91,
			"temp_kf": 0
		},
		"weather": [{
			"id": 501,
			"main": "Rain",
			"description": "moderate rain",
			"icon": "10d"
		}],
		"clouds": {
			"all": 92
		},
		"wind": {
			"speed": 4.61,
			"deg": 76.001
		},
		"rain": {
			"3h": 6.09
		},
		"snow": {},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-15 18:00:00"
	}, {
		"dt": 1523826000,
		"main": {
			"temp": 6,
			"temp_min": 6,
			"temp_max": 6,
			"pressure": 1002,
			"sea_level": 1020.46,
			"grnd_level": 1002,
			"humidity": 92,
			"temp_kf": 0
		},
		"weather": [{
			"id": 501,
			"main": "Rain",
			"description": "moderate rain",
			"icon": "10d"
		}],
		"clouds": {
			"all": 92
		},
		"wind": {
			"speed": 5.46,
			"deg": 71.5027
		},
		"rain": {
			"3h": 7.39
		},
		"snow": {},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-15 21:00:00"
	}, {
		"dt": 1523836800,
		"main": {
			"temp": 4.62,
			"temp_min": 4.62,
			"temp_max": 4.62,
			"pressure": 999.82,
			"sea_level": 1018.27,
			"grnd_level": 999.82,
			"humidity": 92,
			"temp_kf": 0
		},
		"weather": [{
			"id": 501,
			"main": "Rain",
			"description": "moderate rain",
			"icon": "10n"
		}],
		"clouds": {
			"all": 92
		},
		"wind": {
			"speed": 6.16,
			"deg": 73.0025
		},
		"rain": {
			"3h": 6.9
		},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-16 00:00:00"
	}, {
		"dt": 1523847600,
		"main": {
			"temp": 4.31,
			"temp_min": 4.31,
			"temp_max": 4.31,
			"pressure": 1000.24,
			"sea_level": 1018.89,
			"grnd_level": 1000.24,
			"humidity": 92,
			"temp_kf": 0
		},
		"weather": [{
			"id": 501,
			"main": "Rain",
			"description": "moderate rain",
			"icon": "10n"
		}],
		"clouds": {
			"all": 100
		},
		"wind": {
			"speed": 2.97,
			"deg": 349
		},
		"rain": {
			"3h": 3.48
		},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-16 03:00:00"
	}, {
		"dt": 1523858400,
		"main": {
			"temp": 2.9,
			"temp_min": 2.9,
			"temp_max": 2.9,
			"pressure": 1000.73,
			"sea_level": 1019.15,
			"grnd_level": 1000.73,
			"humidity": 98,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10n"
		}],
		"clouds": {
			"all": 100
		},
		"wind": {
			"speed": 1.61,
			"deg": 320.001
		},
		"rain": {
			"3h": 1.92
		},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-16 06:00:00"
	}, {
		"dt": 1523869200,
		"main": {
			"temp": 2.68,
			"temp_min": 2.68,
			"temp_max": 2.68,
			"pressure": 999,
			"sea_level": 1017.67,
			"grnd_level": 999,
			"humidity": 97,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10n"
		}],
		"clouds": {
			"all": 92
		},
		"wind": {
			"speed": 1.51,
			"deg": 341.501
		},
		"rain": {
			"3h": 1.5
		},
		"snow": {},
		"sys": {
			"pod": "n"
		},
		"dt_txt": "2018-04-16 09:00:00"
	}, {
		"dt": 1523880000,
		"main": {
			"temp": 2.89,
			"temp_min": 2.89,
			"temp_max": 2.89,
			"pressure": 999.1,
			"sea_level": 1017.83,
			"grnd_level": 999.1,
			"humidity": 97,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10d"
		}],
		"clouds": {
			"all": 92
		},
		"wind": {
			"speed": 1.16,
			"deg": 293.5
		},
		"rain": {
			"3h": 1.14
		},
		"snow": {},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-16 12:00:00"
	}, {
		"dt": 1523890800,
		"main": {
			"temp": 2.67,
			"temp_min": 2.67,
			"temp_max": 2.67,
			"pressure": 999.43,
			"sea_level": 1018.15,
			"grnd_level": 999.43,
			"humidity": 100,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10d"
		}],
		"clouds": {
			"all": 92
		},
		"wind": {
			"speed": 3.22,
			"deg": 270.003
		},
		"rain": {
			"3h": 0.54000000000001
		},
		"snow": {
			"3h": 0.21875
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-16 15:00:00"
	}, {
		"dt": 1523901600,
		"main": {
			"temp": 1.9,
			"temp_min": 1.9,
			"temp_max": 1.9,
			"pressure": 1000.97,
			"sea_level": 1019.57,
			"grnd_level": 1000.97,
			"humidity": 91,
			"temp_kf": 0
		},
		"weather": [{
			"id": 500,
			"main": "Rain",
			"description": "light rain",
			"icon": "10d"
		}],
		"clouds": {
			"all": 88
		},
		"wind": {
			"speed": 6.28,
			"deg": 306.509
		},
		"rain": {
			"3h": 0.10249999999999
		},
		"snow": {
			"3h": 0.815
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-16 18:00:00"
	}, {
		"dt": 1523912400,
		"main": {
			"temp": 1.1,
			"temp_min": 1.1,
			"temp_max": 1.1,
			"pressure": 1002.44,
			"sea_level": 1021.19,
			"grnd_level": 1002.44,
			"humidity": 82,
			"temp_kf": 0
		},
		"weather": [{
			"id": 600,
			"main": "Snow",
			"description": "light snow",
			"icon": "13d"
		}],
		"clouds": {
			"all": 92
		},
		"wind": {
			"speed": 7.44,
			"deg": 294.007
		},
		"rain": {},
		"snow": {
			"3h": 0.31
		},
		"sys": {
			"pod": "d"
		},
		"dt_txt": "2018-04-16 21:00:00"
	}],
	"city": {
		"id": 5116303,
		"name": "Eggertsville",
		"coord": {
			"lat": 42.9634,
			"lon": -78.804
		},
		"country": "US",
		"population": 15019
	}
};		

		var forecastObjects = [];
		

		response.list.forEach((list) =>{			
			
		});


		response.list.forEach((list) =>{			
			var date = list.dt_txt.split(" ")[0];
			var time = list.dt_txt.split(" ")[1];
			var temp = {};			
			temp.list = list;
			temp.date = date;
			forecastObjects.push(temp);
		});

		var uniqueDates = [...new Set(forecastObjects.map((a)=>a.date))];

		// forecastObjects.forEach((obj)=>{
		// 	var obj = {};
		// 	if()
		// });	


	}


	render(){
		return(
				<div><button onClick={this.getForecast.bind(this)}>Forecast</button></div>
			)
	}
}

export default Forecast;