import React,{Component} from 'react';

class Temperature extends Component{
	// getInitialState(){
	// 	return(
	// 			{
	// 				tempDisplayType : 'K'
	// 			}
	// 		)
	// }
	constructor(props){
		super(props);
		this.state = { 
			tempDisplayType : this.props.updateTemp,
			tempTypes:[
			{
				tempName : 'Kelvin',
				id : 1
			},
			{
				tempName : 'Celsius',
				id : 2
			},
			{
				tempName : 'Farenheit',
				id : 3
			}
			],
			selectedTempType : 'Celsius' };
	}
	tempTypeClicked(tempId){
		var type = '';
		this.state.tempTypes.map((a) => {
			if(a.id == tempId){
				type = a;				
			}			
		});
		let displayTemp = this.state.tempDisplayType;		
		this.setState({selectedTempType : type.tempName});
	}


	// shouldComponentUpdate(nextProps, nextState){
	// 	console.log("shouldComponentUpdate", nextProps, nextState);
	// 	console.log("this.state.tempDisplayType",this.state.tempDisplayType);
	// 	if(this.state.tempDisplayType != nextProps.updateTemp){
	// 		this.setState({tempDisplayType : nextProps.updateTemp})
	// 		console.log("Returning true");
	// 		return true;
	// 	}else{
	// 		return false;
	// 	}
	// }
	
	// componentWillUpdate(nextProps, nextState){
	// 	console.log("componentWillUpdate", nextProps, nextState);
	// 	this.setState({tempDisplayType : nextProps.updateTemp})
	// }

	renderCelsius(){
		return (
			<div>
				{(this.props.updateTemp) + 'C'}				
			</div>
			)
	}
	renderKelvin(){
		return (
			<div>
				{ Math.round(parseInt(this.props.updateTemp) + 273) + 'K'}
			</div>
			)
	}
	renderFarenheit(){
		return (
			<div>
				{Math.round(((parseInt(this.props.updateTemp) - 32) * 5)/ 9) + 'F'}
			</div>
			)
	}
	render(){
		return(
			<div className="para">	
			<div>Temperature displayed in {this.state.selectedTempType} :</div>
			{(this.state.selectedTempType == 'Celsius') ?(
							this.renderCelsius()) : 
							((this.state.selectedTempType == 'Kelvin') ?
							 this.renderKelvin() : this.renderFarenheit())
		 		}
			
			<div>
				{	this.state.tempTypes.map((temp) => {
						return (
								<a href="#" onClick={this.tempTypeClicked.bind(this, temp.id)} key={temp.id} id={temp.id}>{temp.tempName}</a>
							)
					})
				}					
				</div>
			</div>
			)				
	}
}

export default Temperature;