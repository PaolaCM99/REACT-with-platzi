import React from 'react';

class BadgeForm extends React.Component {
	//Eventos
	// state ={}; //inicializar estado
	// handleChange= e=>{
	// 	// console.log({
	// 	// 	name: e.target.name,
	// 	// 	value: e.target.value
	// 	// });
	// 	this.setState({
	// 		[e.target.name]:e.target.value,
	// 	})
	// };
	handleClick = e =>{
		console.log("click")
	}
	handleSubmit = e =>{
		e.preventDefault()
		console.log("enviado")
	}
	render (){
		return (
			<div>
				<h1>New attendant</h1>
				<form  onSubmit={this.handleSubmit} >
					<div className="form-group">
						<label htmlFor=""> First Name</label>
						<input onChange={this.onChange} className="form-control"type="text" name="firsName" value={this.props.formValues.firstName} />
					</div>
					<div className="form-group">
						<label htmlFor=""> Last Name</label>
						<input onChange={this.onChange} className="form-control"type="text" name="lastName" value={this.props.formValues.lastName} />
					</div>
					<div className="form-group">
						<label htmlFor=""> Job title</label>
						<input onChange={this.onChange} className="form-control"type="text" name="jobTitle" value={this.props.formValues.jobTitle} />
					</div>
					
					<button type="submit" onClick={this.handleClick} className="btn"> save</button>
				</form>
			</div>
		)
	}
}
export default BadgeForm