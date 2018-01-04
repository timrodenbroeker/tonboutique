import React, { Component } from 'react';

class BoxSettings extends Component {


  render() {
    return (
    	<div className="group">
          <div className="boxHead">
            <h3>Settings</h3>
          </div>
          <div className="boxBody">
           
    
                {this.props.children}
         </div>
        </div>
    );
  }
}

export default BoxSettings;
