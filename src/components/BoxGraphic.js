import React, { Component } from 'react';
import TextInput from './input/TextInput';
import SelectInput from './input/SelectInput';

class BoxGraphic extends Component {


  render() {

 

    return (
    	<div className="group">
          <div className="boxHead">
            <h3>Graphic</h3>
          </div>
          <div className="boxBody">

{this.props.children}
            </div>
          



         </div>

    );
  }
}

export default BoxGraphic;
