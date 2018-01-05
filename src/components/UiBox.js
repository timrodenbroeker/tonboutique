import React, { Component } from 'react';

class UiBox extends Component {


  render() {
    return (
    	<div className="group">
          <div className="boxHead">
            <h3>{this.props.name}</h3>
          </div>
          <div className="boxBody">
                {this.props.children}
         </div>
        </div>
    );
  }
}

export default UiBox;
