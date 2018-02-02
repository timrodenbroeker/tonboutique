import React, { Component } from 'react';

class UiBoxExport extends Component {
  
  saveCanvas(){
    alert('save!');
  }

  render() {

    
    return (

        <div id="buttonWrapper">

            <button id="exportButton" className="btn" onClick={this.saveCanvas}>
                    
                {this.props.name}
            
            </button>
            
        </div>
        

    );
  }
}

export default UiBoxExport;
