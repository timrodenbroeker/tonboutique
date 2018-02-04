import React, { Component } from "react";

class ColorField extends Component {
	render() {
		const css = { background: this.props.color };

		return (
			<div
				color={this.props.color}
				className="color"
				style={css}
				onClick={this.props.changeColor}
			/>
		);
	}
}

export default ColorField;
