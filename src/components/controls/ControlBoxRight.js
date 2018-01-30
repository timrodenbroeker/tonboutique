import React, { Component } from 'react';
import UiBoxColors from './UiBoxColors';
import UiBoxView from './UiBoxView';
import UiBoxExport from './UiBoxExport';


class ControlBoxRight extends Component {
constructor(props){
  super(props);
  this.state = {}
  this.test = this.test.bind(this);
}

test(){
  alert('a');
}


render() {
    return (

	 <section id="controlsRight">

           <UiBoxView 
           name="View"
            collapsed={true}
            viewScale={this.props.viewScale}
            changeViewScale={this.props.changeViewScale}

            viewRotationY={this.props.viewRotationY}
            changeViewRotationY={this.props.changeViewRotationY}
           />

            <UiBoxExport 
              name="Export" 
              onClick={this.test}
            />

        </section>

    );
  }
}

export default ControlBoxRight;
