import React, { Component } from 'react';
import TextInput from '../../input/TextInput';
import SelectInput from '../../input/SelectInput';
import RangeSlider from '../../input/RangeSlider';

class UiBoxGraphic extends Component {


  render() {
    return (
    	<div className="group">
            <div className="boxHead">
                <h3>Graphic 
                
                <SelectInput 
                    name="File" 
                    options={this.props.arr} 
                    value={this.props.svg} 
                    onChange={this.props.changeSvg}
                />

                <RangeSlider 
                    name="Size" 
                    value={this.props.svgWidth} 
                    min="0"  
                    max="1000" 
                    onChange={this.props.changeSvgWidth}
                />

                <RangeSlider 
                    name="Rotation" 
                    value={this.props.svgRotation} 
                    min="0" 
                    max="360" 
                    onChange={this.props.changeSvgRotation}
                />

              </h3>
            </div>
            <div className="boxBody">
           


         </div>
        </div>
    );
  }
}

export default UiBoxGraphic;
