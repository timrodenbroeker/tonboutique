import React, { Component } from 'react';

class ColorPickerTrigger extends Component {

  render() {
    return (
   <div className="field">
          <h4>{this.props.name}</h4>
         <button className="colorField" style={{"background": this.props.bg}} onClick={this.props.onClick}>

        </button>
        </div>
    );
  }
}

export default ColorPickerTrigger;
