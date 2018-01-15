import React, { Component } from 'react';
import UiBoxData from './left/UiBoxData';
import UiBoxTypography from './left/UiBoxTypography';

class ControlBoxLeft extends Component {


  render() {
    return (

	 <section id="controlsLeft">

            <UiBoxData 
              
                artist={this.props.name}
                onChangeArtist={this.props.changeName}

                title={this.props.title}
                onChangeTitle={this.props.changeTitle}
              
                subline={this.props.subline}
                onChangeSubline={this.props.changeSubline}
            />


            <UiBoxTypography 
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


          </section>

    );
  }
}

export default ControlBoxLeft;
