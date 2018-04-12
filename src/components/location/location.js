import React,{Component} from 'react';

class Location extends Component{
	constructor(props){
		super(props);
		console.log("Locaztion==="+props);
	}

	render(){
		return(
				<div className="para">
					<div>The coordinates are : {this.props.updateCoordinates}</div>
					<div>
						City : {this.props.updateCity}
					</div>
					<div>
						Country :{this.props.updateCountry}
					</div>
					
					
				</div>
			)
	}
}

export default Location;