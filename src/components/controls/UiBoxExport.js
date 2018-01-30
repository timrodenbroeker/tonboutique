import React, { Component } from 'react';

class UiBoxExport extends Component {
  

  render() {

    
    return (
    	<div className="group">
            <div className="boxHead">
                <h3 className="lighten" onClick={() => alert('a')}>
                    
                    {this.props.name}
                </h3>
            </div>
        </div>
    );
  }
}

export default UiBoxExport;
