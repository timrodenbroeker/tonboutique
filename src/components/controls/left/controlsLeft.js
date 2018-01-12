import React, { Component } from 'react';

class controlsLeft extends Component {


  render() {
    return (
  <section id="controlsLeft">

            <UiBox name="Data">
              
          <TextInput name="Artist" value={this.state.name} onChange={this.changeName}/>

          <TextInput name="Title" value={this.state.title} onChange={this.changeTitle}/>

          <TextInput name="Subline" value={this.state.subline} onChange={this.changeSubline}/>

            </UiBox>

            <UiBox name="Typography"> 

              <RangeSlider name="Font-Size" value={this.state.fontSize} min={this.state.fontSizeMin}  max={this.state.fontSizeMax} onChange={this.changeFontSize}/>


               <SelectInput name="Font-Weight" options={["normal","bold"]} value={this.state.fontWeight} onChange={this.changeFontWeight}/>

               <SelectInput name="Font-Family" options={this.state.availableFonts} value={this.state.fontFamily} onChange={this.changeFontFamily}/>

               {/*<SelectInput name="text-position" options={["flex-start","center","flex-end"]} value={this.state.textPosition} onChange={this.changeTextPosition}/>*/}

              

                <SelectInput name="Align-Artist" options={["left","center","right"]} value={this.state.fontAlignArtist} onChange={this.changeFontAlignArtist}/>  

                <SelectInput name="Align-Title" options={["left","center","right"]} value={this.state.fontAlignTitle} onChange={this.hangeFontAlignTitle}/>  

            </UiBox>

          </section>
    );
  }
}

export default controlsLeft;
