import React from 'react'
import Nav from '../components/navbar.js'
import header from "../img/badge-header.svg"
import Badge from "../components/Badge"
import BadgeForm from "../components/BadgeForm"

class badgeNew extends React.Component {
	state={form:{
		firstName:'',
		lastName:'',
		jobTitle:''
	}};
	handleChange =e =>{
		this.setState({
			form:{
				...this.setState.form,
				[e.target.name]:e.target.value,
			}
		})
	}
	render(){
		return (
			<div>
				<Nav />
				<div className="badgeNew_hero">
					<img className="img-fluid" scr={header}/>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge
							 firstName="Leidy" 
							 lastName="Castro"
							 jobTitle="front end"/>
						</div>
					</div>
				</div>
					<div className="col-6">
						<BadgeForm onChange ={this.handleChange} formValues={this.state.form}/>
					</div>
			</div>	
		);
	}
}
export default badgeNew