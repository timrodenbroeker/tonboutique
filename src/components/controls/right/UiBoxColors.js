import React, { Component } from 'react';
import TextInput from '../../input/TextInput';
import ColorPickerTrigger from '../../input/ColorPickerTrigger';
import ColorPicker from '../../input/ColorPicker';

class UiBoxColors extends Component {


  render() {
    return (
    	<div className="group">
            <div className="boxHead">
                <h3>View</h3>
            </div>
            <div className="boxBody">

   <ColorPickerTrigger 
            bg={this.props.svgFill} 
            onChange={this.props.changeSvgFill} 
            onClick={this.props.toggleModal}
        />

        <ColorPickerTrigger 
            name="Text" 
            bg={this.props.fontColor} 
            onChange={this.props.changeFontColor} 
            onClick={this.props.toggleModal}
        />

        <ColorPickerTrigger 
            name="Background" 
            bg={this.props.bg} 
            onClick={this.props.toggleModal}
        />

         </div>
        </div>
    );
  }
}

export default UiBoxColors;
