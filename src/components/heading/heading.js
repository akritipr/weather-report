import React,{Component} from 'react';
import '../../main.css';

class Heading extends Component{
	constructor(props){
		super(props)
		this.state = {
			weatherMain : this.props.updateWeather,
			weatherDesc : this.props.updateWeatherDesc
		}
	}
	render(){
		return(
			<div>
				<div className="heading">Weather Check</div>
				<div className="sub-heading">The weather conditions are:</div>
				<div className="weather">{this.props.updateWeather}&nbsp;{this.props.updateWeatherDesc}</div>
			</div>
			)
	}
}

export default Heading;