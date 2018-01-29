import React, { Component } from 'react';
import RangeSlider from '../input/RangeSlider';

class UiBoxView extends Component {
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
                name="Scale" 
                value={this.props.viewScale} 
                min="0.5"  
                max="1.5" 
                onChange={this.props.changeViewScale} 
                step="0.1"
            />

            <RangeSlider 
                name="Rotation" 
                value={this.props.viewRotationY} 
                min="-25" 
                max="25" 
                onChange={this.props.changeViewRotationY} 
                step="1"
            />


         </div>
         }
        </div>
    );
  }
}

export default UiBoxView;
