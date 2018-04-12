import React,{Component} from 'react';
import './image.css';
import _ from 'lodash';

class Image extends Component{
	constructor(props){
		super(props);
		this.state={
			weatherType : this.props.updateId
		}
	}

	// componentDidMount(){
	// 	alert("this.props.updateId"+this.props.updateId);
	// 	{(this.props.updateId == 'Cloud') ? this.renderCloud() : (
	// 				(this.props.updateId == 'Clear') ? this.renderClear() : (
	// 					(this.props.updateId == 'Rain') ? this.renderRain() : (
	// 						(this.props.updateId == 'Snow') ? this.renderSnow() : (this.renderNothing() ))))}

	// }

	componentDidUpdate(prevProps, prevState){
		{(this.props.updateId == 'Cloud') ? this.renderCloud() : (
					(this.props.updateId == 'Clear') ? this.renderClear() : (
						(this.props.updateId == 'Rain') ? this.renderRain() : (
							(this.props.updateId == 'Snow') ? this.renderSnow() : (this.renderNothing() ))))}

	}
	renderCloud(){
				document.getElementById("weatherCanvas").style.display = 'block';
				document.getElementById("weatherCanvas").style.margin = 'auto';
				let c = document.getElementById("weatherCanvas");
				let context = c.getContext("2d");
				var startX = 200;
                var startY = 100;
                
                // draw cloud shape
                context.beginPath();
                context.moveTo(startX, startY);
                context.bezierCurveTo(startX - 40, startY + 20, startX - 40, startY + 70, startX + 60, startY + 70);
                context.bezierCurveTo(startX + 80, startY + 100, startX + 150, startY + 100, startX + 170, startY + 70);
                context.bezierCurveTo(startX + 250, startY + 70, startX + 250, startY + 40, startX + 220, startY + 20);
                context.bezierCurveTo(startX + 260, startY - 40, startX + 200, startY - 50, startX + 170, startY - 30);
                context.bezierCurveTo(startX + 150, startY - 75, startX + 80, startY - 60, startX + 80, startY - 30);
                context.bezierCurveTo(startX + 30, startY - 75, startX - 20, startY - 60, startX, startY);
                context.closePath();
                
                // add a radial gradient
                var grdCenterX = 260;
                var grdCenterY = 80;
                var grd = context.createRadialGradient(grdCenterX, grdCenterY, 10, grdCenterX, grdCenterY, 200);
                grd.addColorStop(0, "#8ED6FF"); // light blue
                grd.addColorStop(1, "#004CB3"); // dark blue
                context.fillStyle = grd;
                context.fill();
                
                // set the line width and stroke color
                context.lineWidth = 5;
                context.strokeStyle = "#0000ff";
                context.stroke();

                var startX = 10;
                var startY = 10;
                context.beginPath();
                context.moveTo(startX, startY);
                context.bezierCurveTo(startX - 40, startY + 20, startX - 40, startY + 70, startX + 60, startY + 70);
                context.bezierCurveTo(startX + 80, startY + 100, startX + 150, startY + 100, startX + 170, startY + 70);
                context.bezierCurveTo(startX + 250, startY + 70, startX + 250, startY + 40, startX + 220, startY + 20);
                context.bezierCurveTo(startX + 260, startY - 40, startX + 200, startY - 50, startX + 170, startY - 30);
                context.bezierCurveTo(startX + 150, startY - 75, startX + 80, startY - 60, startX + 80, startY - 30);
                context.bezierCurveTo(startX + 30, startY - 75, startX - 20, startY - 60, startX, startY);
                context.closePath();
                var grdCenterX = 260;
                var grdCenterY = 80;
                var grd = context.createRadialGradient(grdCenterX, grdCenterY, 10, grdCenterX, grdCenterY, 200);
                grd.addColorStop(0, "#8ED6FF"); 
                grd.addColorStop(1, "#004CB3"); 
                context.fillStyle = grd;
                context.fill();
                context.lineWidth = 5;
                context.strokeStyle = "#0000ff";
                context.stroke();
	}

	renderClear(){
		document.getElementById("weatherCanvas").style.display = 'block';
		document.getElementById("weatherCanvas").style.margin = 'auto';
		let c = document.getElementById("weatherCanvas");
		let context = c.getContext("2d");
		context.beginPath();
		context.arc(180, 120, 80, 0, 2 * Math.PI);
		context.fillStyle = "#ffdf00e6";
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = "#ffb000e6";
		context.stroke();

	// 	context.beginPath();
	// 	context.moveTo(260, 120);
	// 	context.lineTo(320,120);
	// 	context.stroke();

	// 	context.beginPath();
	// 	context.moveTo(100, 120);
	// 	context.lineTo(40,120);
	// 	context.stroke();

	// 	context.beginPath();
	// 	context.moveTo(180, 200);
	// 	context.lineTo(180,260);
	// 	context.stroke();

	// 	context.beginPath();
	// 	context.moveTo(180, 40);
	// 	context.lineTo(180,0);
	// context.stroke();
		
	// 	context.beginPath();
	// 	context.moveTo(120, 170);
	// 	context.lineTo(50,210);
	// 	context.stroke();
	}
	renderSnow(){
		document.getElementById("weatherCanvas").style.display = 'none';
		return(
			<div id="snow">Snow</div>
			)
	}
	renderRain(){
		document.getElementById("weatherCanvas").style.display = 'none';
		return(
			<div>Rain</div>
			)
	}
	renderNothing(){
		document.getElementById("weatherCanvas").style.display = 'none';
	}

	render(){
		return(
				<div>
					<div>
						<canvas id="weatherCanvas"  width="600" height="250" className="cloud-canvas"></canvas>
						<div id="sun-rays"></div>
					</div>	
				

				</div>
			)
		
	}
}

export default Image;