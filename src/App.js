import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Cover from './components/Cover';
import UiBox from './components/UiBox';
import ColorBox from './components/ColorBox';
import TextInput from './components/input/TextInput';
import SelectInput from './components/input/SelectInput';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "Maxon",
      title: "Flash",
      subline: "Including a remix by Alexander Franz",
      svg: 1,
      svgFill: "red",
      svgWidth: 444,
      fontSize: 40,
      fontFamily: "Roboto",
      fontColorArtist: "white",
      fontWeightArtist: "normal",
      fontAlignArtist: "left",
      fontAlignTitle: "right",
      fontWeightTitle: "normal",
      fontColorTitle: "white",
      textPosition: "top",
      bg: "blue",
      arr: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
      colors: ["#03214E","#050C31","#DC332C","#023859"],
      colorBoxVisible: true,
      availableFonts: ["Roboto","Times","Courier"]
    }




    this.changeName = this.changeName.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeSubline = this.changeSubline.bind(this);
    this.changeFontSize = this.changeFontSize.bind(this);
    this.changeFontFamily = this.changeFontFamily.bind(this);
    this.changeFontColorArtist = this.changeFontColorArtist.bind(this);
    this.changeFontAlignArtist = this.changeFontAlignArtist.bind(this);
    this.changeFontWeightArtist = this.changeFontWeightArtist.bind(this);
    this.changeFontWeightTitle = this.changeFontWeightTitle.bind(this);
    this.changeFontAlignTitle = this.changeFontAlignTitle.bind(this);
    this.changeFontColorTitle = this.changeFontColorTitle.bind(this);
    this.changeTextPosition = this.changeTextPosition.bind(this);
    this.changeBg = this.changeBg.bind(this);
    this.changeSvg = this.changeSvg.bind(this);
    this.changeSvgWidth = this.changeSvgWidth.bind(this);
    this.changeSvgFill = this.changeSvgFill.bind(this);

  }

  changeName(event){
    this.setState({
      name: event.target.value
    });
  }

    changeSubline(event){
    this.setState({
      subline: event.target.value
    });
  }

    changeBg(event){
    this.setState({
      bg: event.target.value
    });
  }


    changeTitle(event){
        console.log("the title has been changed!");
    this.setState({
      title: event.target.value
    });
  }

   changeFontSize(event){

    this.setState({
      fontSize: event.target.value
    });

  }


   changeFontFamily(event){

    this.setState({
      fontFamily: event.target.value
    });

  }


 changeFontColorArtist(event){

    this.setState({
      fontColorArtist: event.target.value
    });

  }

   changeFontAlignArtist(event){

    this.setState({
      fontAlignArtist: event.target.value
    });

  }

   changeFontColorTitle(event){

    this.setState({
      fontColorTitle: event.target.value
    });

  }

    changeFontAlignTitle(event){

    this.setState({
      fontAlignTitle: event.target.value
    });

  }


  changeFontWeightArtist(event){
    this.setState({
      fontWeightArtist: event.target.value
    });
  }  

changeFontWeightTitle(event){
    this.setState({
      fontWeightTitle: event.target.value
    });
  }  


changeTextPosition(event){
    this.setState({
      textPosition: event.target.value
    });
  }  


changeSvg(event){
    this.setState({
      svg: event.target.value
    });
  }    


changeSvgFill(event){
    this.setState({
      svgFill: event.target.value
    });
  }   


changeSvgWidth(event){
    this.setState({
      svgWidth: event.target.value
    });
  }   


  render() {

    const coverStyle = {
      backgroundColor:this.state.bg
    }

    const typoStyleArtist = {
      fontFamily: this.state.fontFamily,
      fontWeight: this.state.fontWeightArtist,
      fontSize: this.state.fontSize + "px",
      color: this.state.fontColorArtist,
      textAlign: this.state.fontAlignArtist
    }


    const typoStyleTitle = {
      fontFamily: this.state.fontFamily,
      fontWeight: this.state.fontWeightTitle,
      fontSize: this.state.fontSize + "px",
      color: this.state.fontColorTitle,
      textAlign: this.state.fontAlignTitle
    }


    const textContainerStyles = {
        alignItems: this.state.textPosition
    }





    return (
      <div className="App">
          <section id="controlsLeft">

            <UiBox name="Text">
              
          <TextInput name="Artist" value={this.state.name} onChange={this.changeName}/>

          <TextInput name="Title" value={this.state.title} onChange={this.changeTitle}/>

          <TextInput name="Subline" value={this.state.subline} onChange={this.changeSubline}/>

            </UiBox>

            <UiBox name="Typography"> 

               <TextInput name="Font-Size" value={this.state.fontSize} onChange={this.changeFontSize}/>

               <SelectInput name="Font-Weight" options={["normal","bold"]} value={this.state.fontWeightArtist} onChange={this.changeFontWeightArtist}/>

               <SelectInput name="Font-Family" options={["Roboto","Times","Courier"]} value={this.state.fontFamily} onChange={this.changeFontFamily}/>

               <SelectInput name="text-position" options={["flex-start","center","flex-end"]} value={this.state.textPosition} onChange={this.changeTextPosition}/>

                <TextInput name="Artist Color" value={this.state.fontColorArtist} onChange={this.changeFontColorArtist}/>

                <TextInput name="Title Color" value={this.state.fontColorTitle} onChange={this.changeFontColorTitle}/>

                <SelectInput name="Align-Artist" options={["left","center","right"]} value={this.state.fontAlignArtist} onChange={this.changeFontAlignArtist}/>  

                <SelectInput name="Title-Weight" options={["normal","bold"]} value={this.state.fontWeightTitle} onChange={this.changeFontWeightTitle}/>  

                <SelectInput name="Align-Title" options={["left","center","right"]} value={this.state.fontAlignTitle} onChange={this.hangeFontAlignTitle}/>  

            </UiBox>

          </section>

            <section id="controlsRight">


            <UiBox name="Graphic">
              
     
           <SelectInput name="File" options={this.state.arr} value={this.state.svg} onChange={this.changeSvg}/>

          <TextInput name="Fill-color" value={this.state.svgFill} onChange={this.changeSvgFill}/>

          <TextInput name="Svg-Size" value={this.state.svgWidth} onChange={this.changeSvgWidth}/>           

              
              </UiBox>


          <UiBox name="Settings">

          <TextInput name="Background" value={this.state.bg} onChange={this.changeBg}/>

           </UiBox>

          </section>

          <Cover 
            coverStyle={coverStyle} 
            textContainerStyles={textContainerStyles} 
            typoStyleArtist={typoStyleArtist} 
            typoStyleTitle={typoStyleTitle} 
            svg={this.state.svg} 
            svgWidth={this.state.svgWidth} 
            svgFill={this.state.svgFill} 
            name={this.state.name} 
            title={this.state.title}
            subline={this.state.subline}
            />

          

          <ColorBox colors={this.state.colors}/>

      </div>
    );
  }
}

export default App;
