import React, { Component } from 'react';
import SelectInput from '../input/SelectInput';
import RangeSlider from '../input/RangeSlider';

class UiBoxTypography extends Component {
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
           
            <RangeSlider 
                name="Font-Size" 
                value={this.props.fontSize} 
                min="20" 
                max="100"
                onChange={this.props.changeFontSize}
            />


            <SelectInput 
                name="Font-Weight" 
                options={[300,400,500,600,700,800,900]} 
                value={this.props.fontWeight} 
                onChange={this.props.changeFontWeight}
            />

        {/* 

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
                onChange={this.props.changeFontAlignTitle}
            />  

        */}

         </div>


     }

        </div>
    );
  }
}

export default UiBoxTypography;
