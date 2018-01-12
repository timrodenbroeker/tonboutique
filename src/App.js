import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Cover from './components/cover/Cover';
import UiBox from './components/controls/UiBox';
import RangeSlider from './components/controls/input/RangeSlider';
import ColorPicker from './components/controls/input/ColorPicker';
import ColorPickerTrigger from './components/controls/input/ColorPickerTrigger';
import TextInput from './components/controls/input/TextInput';
import TextArea from './components/controls/input/TextArea';
import SelectInput from './components/controls/input/SelectInput';
import Color from './components/controls/input/Color';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "Maxon",
      title: "Flash",
      subline: "Including a remix by Alexander Franz",
      
      svg: 1,
      svgFill: "#111111",
      svgWidth: 444,
      svgRotation: 0,
      translateX: 0,
      ranslateY: 0,

      fontSize: 40,
      fontSizeMin: 20,
      fontSizeMax: 100,
      fontFamily: "PlexSans",
      fontWeight: "normal",
      fontAlignArtist: "left",
      fontAlignTitle: "right",
      fontColor: "#111111",
      textPosition: "top",
      bg: "#f45844",
      arr: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
      ModalColorsCollapsed: true,
      availableFonts: ["PlexMono","PlexSerif","PlexSans"],

      isOpen: false,
      viewRotationY: 0,
      viewScale: 1
    }


    this.changeName = this.changeName.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeSubline = this.changeSubline.bind(this);
    this.changeFontSize = this.changeFontSize.bind(this);
    this.changeFontFamily = this.changeFontFamily.bind(this);

    this.changeFontAlignArtist = this.changeFontAlignArtist.bind(this);
    this.changeFontWeight = this.changeFontWeight.bind(this);
    this.changeFontAlignTitle = this.changeFontAlignTitle.bind(this);
    this.changeFontColor = this.changeFontColor.bind(this);
    this.changeTextPosition = this.changeTextPosition.bind(this);

    this.changeBg = this.changeBg.bind(this);

    this.changeSvg = this.changeSvg.bind(this);
    this.changeSvgWidth = this.changeSvgWidth.bind(this);
    this.changeSvgFill = this.changeSvgFill.bind(this);
    this.changeSvgRotation = this.changeSvgRotation.bind(this);

    this.changeTranslateX = this.changeTranslateX.bind(this);
    this.changeTranslateY = this.changeTranslateY.bind(this);

    this.changeViewRotationY = this.changeViewRotationY.bind(this);
    this.changeViewScale = this.changeViewScale.bind(this);

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




   changeFontAlignArtist(event){

    this.setState({
      fontAlignArtist: event.target.value
    });

  }

   changeFontColor(event){

    this.setState({
      fontColor: event.target.value
    });

  }

    changeFontAlignTitle(event){

    this.setState({
      fontAlignTitle: event.target.value
    });

  }


  changeFontWeight(event){
    this.setState({
      fontWeight: event.target.value
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

toggleModalColors(event){
  this.setState({
      ModalColorsCollapsed: !this.state.ModalColorsCollapsed

  });
}


changeViewScale(event){
    this.setState({
      viewScale: event.target.value
    });
  }   

changeViewRotationY(event){
    this.setState({
      viewRotationY: event.target.value
    });
  }     

changeSvgRotation(event){
    this.setState({
      svgRotation: event.target.value
    });
  }    

changeTranslateX(event){
    this.setState({
      translateX: event.target.value
    });
  }    

changeTranslateY(event){
    this.setState({
      translateY: event.target.value
    });
  }      

 toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {

    const coverStyle = {
      backgroundColor:this.state.bg,
      transform: "scale("+this.state.viewScale+") rotateY("+this.state.viewRotationY+"deg)"
    }

    const typoStyleArtist = {
      fontFamily: this.state.fontFamily,
      fontWeight: this.state.fontWeight,
      fontSize: this.state.fontSize + "px",
      color: this.state.fontColor,
      textAlign: this.state.fontAlignArtist
    }


    const typoStyleTitle = {
      fontFamily: this.state.fontFamily,
      fontWeight: this.state.fontWeight,
      fontSize: this.state.fontSize + "px",
      color: this.state.fontColor,
      textAlign: this.state.fontAlignTitle
    }


    const textContainerStyles = {
        alignItems: this.state.textPosition
    }


       var Data = this.state.colors,
            MakeItem = function(X) {
                return <Color name={"color"+X}colr={X}></Color>;
            };



    return (
      <div className="App">
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

            <section id="controlsRight">


            <UiBox name="Graphic">
              
     
           <SelectInput name="File" options={this.state.arr} value={this.state.svg} onChange={this.changeSvg}/>

        
          <RangeSlider name="Size" value={this.state.svgWidth} min="0"  max="1000" onChange={this.changeSvgWidth}/>

          <RangeSlider name="Rotation" value={this.state.svgRotation} min="0"  max="360" onChange={this.changeSvgRotation}/>

          <RangeSlider name="Translate X" value={this.state.translateX} min="-1000"  max="1000" onChange={this.changeTranslateX}/>

          <RangeSlider name="Translate Y" value={this.state.translateY} min="-1000"  max="1000" onChange={this.changeTranslateY}/>
              
              </UiBox>


          <UiBox name="Colors">

          

          <ColorPickerTrigger name="Graphic" bg={this.state.svgFill} onChange={this.changeSvgFill} onClick={this.toggleModal}/>

          <ColorPickerTrigger name="Text" bg={this.state.fontColor} onChange={this.changeFontColor} onClick={this.toggleModal}/>

          <ColorPickerTrigger name="Background" bg={this.state.bg} onClick={this.toggleModal}/>
       


        <ColorPicker 
          show={this.state.isOpen}
          onClose={this.toggleModal}
        />

        <ColorPicker colors={this.state.colors} show={this.state.isOpen} onClose={this.toggleModal}>
           

        	
        </ColorPicker>


           </UiBox>



           <UiBox name="View">


          <RangeSlider name="Scale" value={this.state.viewScale} min="0.5"  max="1.5" onChange={this.changeViewScale} step="0.1"/>

          <RangeSlider name="Rotation" value={this.state.viewRotationY} min="-25"  max="25" onChange={this.changeViewRotationY} step="1"/>
       

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
            svgRotation={this.state.svgRotation} 
            translateX={this.state.translateX}
            translateY={this.state.translateY}

            name={this.state.name} 
            title={this.state.title}
            subline={this.state.subline}
          />
          
      </div>

    );
  }
}

export default App;
