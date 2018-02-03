import React, { Component } from 'react';

class UiBoxExport extends Component {
  
  saveCanvas(){
    alert('save!');
  }

  render() {

    
    return (


            <button id="exportButton" className="btn" onClick={this.saveCanvas}>
                    
                {this.props.name}
            
            </button>
            

        

    );
  }
}

export default UiBoxExport;
