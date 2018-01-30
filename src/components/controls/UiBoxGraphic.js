import React, { Component } from 'react';
import SelectInput from '../input/SelectInput';
import RangeSlider from '../input/RangeSlider';

class UiBoxGraphic extends Component {
    constructor(props){
    super(props);
    this.state = {
        collapsed: this.props.collapsed
        }
    this.collapseBox = this.collapseBox.bind(this);        
    }

    collapseBox(){
        this.setState({collapsed: !this.state.collapsed});
    }

  render() {
    return (
    	<div className="group">
            <div className="boxHead">
                <h3 
                    className={this.state.collapsed ? 'lighten' : 'active'} 
                    onClick={this.collapseBox} >
                    {this.props.name}
                </h3>

                 </div>


            {this.state.collapsed === false &&
                 
            <div className="boxBody">
                
                <SelectInput 
                    name="File" 
                    options={this.props.arr} 
                    value={this.props.svg} 
                    onChange={this.props.changeSvg}
                />

                <RangeSlider 
                    name="Size" 
                    value={this.props.scale} 
                    min="0"  
                    max="2" 
                    step={0.01}
                    onChange={this.props.changeScale}
                />

                <RangeSlider 
                    name="Rotation" 
                    value={this.props.svgRotation} 
                    min="0" 
                    max="360" 
                    onChange={this.props.changeSvgRotation}
                />

           
           


            </div>
        }
        </div>
    );
  }
}

export default UiBoxGraphic;
