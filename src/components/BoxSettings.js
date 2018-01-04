import React, { Component } from 'react';

class BoxSettings extends Component {


  render() {
    return (
    	<div className="group">
          <div className="boxHead">
            <h3>Settings</h3>
          </div>
          <div className="boxBody">
           
            <div className="field">
                <h4>background-color</h4>
                <input value={this.props.bg} onChange={this.props.changeBg}/>
            </div>



         </div>
        </div>
    );
  }
}

export default BoxSettings;
