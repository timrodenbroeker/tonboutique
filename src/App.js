import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Cover from './components/cover/Cover';
import ControlBoxLeft from './components/controls/ControlBoxLeft';
import ControlBoxRight from './components/controls/ControlBoxRight';


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
      fontFamily: "PlexSans",
      fontWeight: "normal",
      fontAlignArtist: "left",
      fontAlignTitle: "right",
      fontColor: "#111111",
      textPosition: "top",
      bg: "#f45844",
      arr: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
      colors: [
        'Crimson',
        'DarkBlue',
        'DarkGray',
        'DarkSeaGreen',
        'MediumBlue',
        'MidnightBlue',
        'SeaGreen',
        'Sienna',
        'SlateGray',
        'SteelBlue',
        'Gainsboro',
        '#111111',
        '#222222',
        '#f1f1f1',
        '#eeeeee',
        '#dddddd',
        '#aaaaaa'
      ], 
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
    this.setState({name: event.target.value});
    }

changeSubline(event){
    this.setState({subline: event.target.value});
    }

changeBg(event){
    this.setState({bg: event.target.value});
    }

changeTitle(event){
    this.setState({title: event.target.value});
    }

changeFontSize(event){
    this.setState({fontSize: event.target.value});
    }

changeFontFamily(event){
    this.setState({fontFamily: event.target.value});
    }

changeFontAlignArtist(event){
    this.setState({fontAlignArtist: event.target.value});
    }

changeFontColor(event){
    this.setState({fontColor: event.target.value});
    }

changeFontAlignTitle(event){
    this.setState({fontAlignTitle: event.target.value});
    }

changeFontWeight(event){
    this.setState({fontWeight: event.target.value});
    }  

changeTextPosition(event){
    this.setState({textPosition: event.target.value});
    }  

changeSvg(event){
    this.setState({svg: event.target.value});
    }    

changeSvgFill(event){
    this.setState({svgFill: event.target.value});
    }   


changeSvgWidth(event){
    this.setState({svgWidth: event.target.value});
    }   

toggleModalColors(event){
    this.setState({ModalColorsCollapsed: !this.state.ModalColorsCollapsed});
    }

changeViewScale(event){
    this.setState({viewScale: event.target.value});
    }   

changeViewRotationY(event){
    this.setState({viewRotationY: event.target.value});
    }     

changeSvgRotation(event){
    this.setState({svgRotation: event.target.value});
    }    

changeTranslateX(event){
    this.setState({translateX: event.target.value});
    }    

changeTranslateY(event){
    this.setState({translateY: event.target.value});
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
       



    return (
      <div className="App">

         <ControlBoxLeft 
            name={this.state.name}
            changeName={this.changeName}

            title={this.state.title}
            changeTitle={this.changeTitle}

            subline={this.state.subline}
            changeSubline={this.changeSubline}

            fontSize={this.state.fontSize}
            changeFontSize={this.changeFontSize}

            fontWeight={this.state.fontWeight}
            changeFontWeight={this.changeFontWeight}

            availableFonts={this.state.availableFonts}
            fontFamily={this.state.fontFamily}
            changeFontFamily={this.changeFontFamily}

            fontAlignArtist={this.state.fontAlignArtist}
            changeFontAlignArtist={this.changeFontAlignArtist}

            fontAlignTitle={this.state.fontAlignTitle}
            changeFontAlignTitle={this.changeFontAlignTitle}

         />

        <ControlBoxRight 
            arr={this.state.arr}
            svg={this.state.svg}
            changeSvg={this.changeSvg}

            svgWidth={this.state.svgWidth}
            changeSvgWidth={this.changeSvgWidth}

            svgRotation={this.state.svgRotation}
            changeSvgRotation={this.changeSvgRotation}

            viewScale={this.state.viewScale}
            changeViewScale={this.changeViewScale}

            viewRotationY={this.state.viewRotation}
            changeViewRotationY={this.changeViewRotationY}

           />

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
