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


   
  render() {
    return (
    	<div className="group">
          <div className="boxHead">
            <h3 
                  className={this.state.collapsed ? 'lighten' : 'active'} 
                    onClick={this.collapseBox} >
                    Actions
                </h3>
          </div>



          {this.state.collapsed === false &&

          <div className="boxBody">
          <div className="boxBodyInner">
             <button id="exportButton" className="btn" onClick={this.props.saveCanvas}>
                    
             Export
            
            </button>

         </div>
         </div>

       }
        </div>
    );
  }
}

export default UiBoxSave;
