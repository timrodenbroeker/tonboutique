import React, { Component } from 'react';
import UiBoxData from './UiBoxData';
import UiBoxTypography from './UiBoxTypography';
import UiBoxGraphic from './UiBoxGraphic';
import UiBoxColors from './UiBoxColors';

class ControlBoxLeft extends Component {


  render() {
    return (

	 <section id="controlsLeft">

            <UiBoxData 

                name="Data"

                collapsed={false}
              
                artist={this.props.name}
                onChangeArtist={this.props.changeName}

                title={this.props.title}
                onChangeTitle={this.props.changeTitle}
              
                subline={this.props.subline}
                onChangeSubline={this.props.changeSubline}
            />


            <UiBoxTypography 

                name="Typography"

                collapsed={true}

                fontSize={this.props.fontSize}
                changeFontSize={this.props.changeFontSize}

                fontWeight={this.props.fontWeight} 
                changeFontWeight={this.props.changeFontWeight}

                availableFonts={this.props.availableFonts}
                fontFamily={this.props.fontFamily}
                changeFontFamily={this.props.changeFontFamily}

                fontAlignArtist={this.props.fontAlignArtist}
                changeFontAlignArtist={this.props.changeFontAlignArtist}

                fontAlignTitle={this.props.fontAlignTitle}
                changeFontAlignTitle={this.props.changeFontAlignTitle}
            /> 

             <UiBoxGraphic 

             name="Graphic"

        collapsed={true}

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


        <UiBoxColors
    name="background-color"
    collapsed={true}
    color={this.props.bg}
    changeColor={this.props.changeBg}
/>

            <UiBoxColors
                name="main color"
                collapsed={true}
                color={this.props.fg}
                changeColor={this.props.changeFg}
            />

          </section>

    );
  }
}

export default ControlBoxLeft;
