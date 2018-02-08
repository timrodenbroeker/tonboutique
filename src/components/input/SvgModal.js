import React, { Component } from "react";
import Graphics from "../../data/Graphics";

class SvgModal extends Component {
	constructor(props) {
        super(props);
        this.graphics = this.props.graphics;
    }

	render() {
		const allGraphics = this.graphics.map(graphic => (
			<div className="thumbnail">
				<img id={graphic-1} onClick={this.props.pickSvg} src={"data:image/svg+xml;charset=utf-8," + Graphics.graphics[graphic-1]} />
			</div>
        ));


  if (!this.props.open) {
    return null;
  }

  	return (
  		<div className="modalWrapper">
			<div className="modal">
				{allGraphics}
			</div>
		</div>
		);
	}
}

export default SvgModal;
