import react from 'react'
import logo from '../img/logo.svg'
import './style.css'

class navbar extends react.Component{
	render(){
		return (
			<div className="navbar">
				<a className="navbar__brand" href="/"> 
				<img className="navbar__brand-logo"src={logo} alt=""/>
				<span className="font-weight-ligth"> Platzi</span>
				<span className="font-weight-bold"> Conf</span>
				</a>
			</div>
			
		)
	}
}
export default navbar