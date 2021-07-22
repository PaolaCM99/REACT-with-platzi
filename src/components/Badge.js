import React from "react";
import img from "../img/9-3.jpg"
import Logoc from "../img/badge-header.svg"
import './style.css'

class Badge extends React.Component{
	render(){
		return (
		<div className="badge">
			<div className="badge__header">
			<img src={Logoc} alt="Logo de la conferencia" />
			</div>
				<div className="badge__sectionName">
					<img className="badge__img" src={img} alt=""/>
				</div>
				<div>
					<h1>{this.props.firstName} {this.props.lastName}</h1>
					<h2>{this.props.JobTitle} </h2>
				</div>
		</div>)
	}
}
export default Badge;