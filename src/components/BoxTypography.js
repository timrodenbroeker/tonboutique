import React, { Component } from 'react';
import TextInput from './input/TextInput';
import SelectInput from './input/SelectInput';


class BoxTypography extends Component {


  render() {
    return (
    	<div className="group">
    	<div className="boxHead">
            <h3>Typography</h3>
           </div>

           <div className="boxBody">

           {this.props.children}
            
            </div>
           </div>
    );
  }
}

export default BoxTypography;
