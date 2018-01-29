import React, { Component } from 'react';
import UiBoxColors from './UiBoxColors';
import UiBoxView from './UiBoxView';
import UiBoxExport from './UiBoxExport';


class ControlBoxRight extends Component {


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

            <UiBoxExport name="Export"/>

        </section>

    );
  }
}

export default ControlBoxRight;
