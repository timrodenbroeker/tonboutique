import React, { Component } from 'react';

class UiBoxSave extends Component {
constructor(props){
    super(props);
    this.state = {
        collapsed: this.props.collapsed
        }
    this.collapseBox = this.collapseBox.bind(this);        
    this.saveCanvas = this.saveCanvas.bind(this);        
    }

    collapseBox(){
        this.setState({collapsed: !this.state.collapsed});
    }


    saveCanvas(){

      console.log(this);

      var c=document.getElementById("theCanvas");
      var d=c.toDataURL("image/png");
      var a  = document.createElement('a');
      a.href = d;
      a.download = 'a.png';
      a.click();

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
                    
                Save PNGs
            
            </button>

         </div>

       }
        </div>
    );
  }
}

export default UiBoxSave;
