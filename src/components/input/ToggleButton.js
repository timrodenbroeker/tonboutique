import React, { Component } from 'react';

class ToggleButton extends Component {

  render() {
    return (
        
        <div className="field">
            <h4>{this.props.name}</h4>
            <button className="modalTrigger" onClick={this.props.toggle}>{this.props.text}</button>
		</div>
    );
  }
}

export default ToggleButton;
