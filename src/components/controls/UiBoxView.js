import React, { Component } from 'react';
import RangeSlider from '../input/RangeSlider';
import Stepper from '../input/Stepper';

class UiBoxView extends Component {
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
                    View
                </h3>
            </div>


             {this.state.collapsed === false &&
            <div className="boxBody">
           <div className="boxBodyInner">
           <Stepper 
                name="View"
                options={this.props.views}
                value={this.props.view}
                increment={this.props.nextView}
                decrement={this.props.prevView}
            />
            </div>
        
         </div>
         }
        </div>
    );
  }
}

export default UiBoxView;
