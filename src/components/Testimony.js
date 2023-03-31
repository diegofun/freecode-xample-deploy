import React from "react";

class Testimony extends React.Component{
	render(){
		return(
			<div className="contenedor-testimonio">
				<img 
					className="imagen-testimonio"
					src={require(`../images/${this.props.image}.jpg`)}
					alt={`Order ${this.props.name}`} />
				<div className="contenedor-texto-testimonio">
					<p className="nombre-pantalla"><strong>{this.props.name}</strong></p>
					<p className="orden-pantalla">{this.props.order}</p>
					<p className="descripcion-pantalla">{this.props.description}</p>
				</div>
			</div>
			
		);
	}
}

export default Testimony;