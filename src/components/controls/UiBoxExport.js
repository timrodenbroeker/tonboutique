import React, { Component } from 'react';

class UiBoxSave extends Component {
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

    saveCanvas(){
      var canvas = document.getElementById('theCanvas');

          var saveButton = document.getElementById('exportButton');

          saveButton.href = canvas.toDataURL();
          saveButton.download = "mypainting.png";

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
             <button id="exportButton" className="btn" onClick={this.saveCanvas}>
                    
                Save cover as PNG
            
            </button>

         </div>

       }
        </div>
    );
  }
}

export default UiBoxSave;
