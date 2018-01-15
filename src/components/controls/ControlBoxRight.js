import React, { Component } from 'react';
import UiBoxColors from './right/UiBoxColors';
import UiBoxView from './right/UiBoxView';
import UiBoxGraphic from './right/UiBoxGraphic';

class ControlBoxRight extends Component {


  render() {
    return (

	 <section id="controlsRight">

    <UiBoxGraphic 
                arr={this.props.arr}
                svg={this.props.svg}
                changeSvg={this.props.changeSvg}

                svgWidth={this.props.svgWidth}
                changeSvgWidth={this.props.changeSvgWidth}

                svgRotation={this.props.svgRotation}
                changeSvgRotation={this.props.changeSvgRotation}

                translateX={this.props.translateX}
                changeTranslateX={this.props.changeTranslateX}
                
                translateY={this.props.translateY}
                changeTranslateY={this.props.changeTranslateY}
            />

           <UiBoxView 
            viewScale={this.props.viewScale}
            changeViewScale={this.props.changeViewScale}

            viewRotationY={this.props.viewRotationY}
            changeViewRotationY={this.props.changeViewRotationY}
           />

        </section>

    );
  }
}

export default ControlBoxRight;
