import React, { Component } from 'react';
import TextInput from '../../input/TextInput';
import SelectInput from '../../input/SelectInput';
import RangeSlider from '../../input/RangeSlider';

class UiBoxTypography extends Component {

  render() {
    return (
    	<div className="group">
            <div className="boxHead">
                <h3>Data</h3>
            </div>
            <div className="boxBody">
           

            <RangeSlider 
                name="Font-Size" 
                value={this.props.fontSize} 
                min="20" 
                max="100"
                onChange={this.props.changeFontSize}
            />


            <SelectInput 
                name="Font-Weight" 
                options={["normal","bold"]} 
                value={this.props.fontWeight} 
                onChange={this.props.changeFontWeight}
            />

            <SelectInput 
                name="Font-Family" 
                options={this.props.availableFonts} 
                value={this.props.fontFamily} 
                onChange={this.props.changeFontFamily}
            />
              

            <SelectInput 
                name="Align-Artist" 
                options={["left","center","right"]} 
                value={this.props.fontAlignArtist} 
                onChange={this.props.changeFontAlignArtist}
            />  

            <SelectInput 
                name="Align-Title" 
                options={["left","center","right"]} 
                value={this.props.fontAlignTitle} 
                onChange={this.props.hangeFontAlignTitle}
            />  

         </div>
        </div>
    );
  }
}

export default UiBoxTypography;
