import React, { Component } from "react";
import ColorField from "../input/ColorField";

class ColorSelect extends Component {
	constructor(props) {
        super(props);
        this.colors = this.props.colors;
    }

	render() {
		const theColors = this.colors[this.props.theme].map(color => (
            <ColorField color={color} changeColor={this.props.changeColor} />
        ));

		return (
			<div className="field">
				<h4>{this.props.name}</h4>
				<div className="boxBodyColors">{theColors}</div>
			</div>
		);
	}
}

export default ColorSelect;
