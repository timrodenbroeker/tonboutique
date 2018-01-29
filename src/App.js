import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import Cover from './components/cover/Cover';
import Canvas from './components/cover/Canvas';
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
      svgWidth: 444,
      svgRotation: 0,
      translateX: 0,
      translateY: 0,

      fontSize: 15,
      fontFamily: "Libre Franklin",
      fontWeight: 600,
      fontAlignArtist: "left",
      fontAlignTitle: "right",
      textPosition: "top",
      bg: "#0000ff",
      fg: "#ffffff",
      arr: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
      ModalColorsCollapsed: true,
      availableFonts: ["Libre Franklin"],

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
    this.changeFg = this.changeFg.bind(this);
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
      alert('Hi!');
    this.setState({bg: event.target.bg});
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

changeFg(event){
    this.setState({fg: event.target.value});
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

pickBg(event){
    this.setState({bg: event.target.getAttribute('color')})
}    

pickFg(event){
    this.setState({fg: event.target.getAttribute('color')})
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
      color: this.state.fg,
      textAlign: this.state.fontAlignArtist
    }


    const typoStyleTitle = {
      fontFamily: this.state.fontFamily,
      fontWeight: this.state.fontWeight,
      fontSize: this.state.fontSize + "px",
      color: this.state.fg,
      textAlign: this.state.fontAlignTitle
    }

    const typoStyleSubline = {
      fontFamily: this.state.fontFamily,
      color: this.state.fg
    }


    const textContainerStyles = {
        alignItems: this.state.textPosition
    }
       



    return (
      <div className="App">

         <ControlBoxLeft 
            arr={this.state.arr}

            svg={this.state.svg}
            changeSvg={this.changeSvg}

            svgWidth={this.state.svgWidth}
            changeSvgWidth={this.changeSvgWidth}

            svgRotation={this.state.svgRotation}
            changeSvgRotation={this.changeSvgRotation}

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


            bg={this.state.bg}
            changeBg={(event) => this.pickBg(event)}

            fg={this.state.fg}
            changeFg={(event) => this.pickFg(event)}            

         />

        <ControlBoxRight 
            
            

            viewScale={this.state.viewScale}
            changeViewScale={this.changeViewScale}

            viewRotationY={this.state.viewRotationY}
            changeViewRotationY={this.changeViewRotationY}

           />

          <Canvas 
            coverStyle={coverStyle} 
            textContainerStyles={textContainerStyles} 
            typoStyleArtist={typoStyleArtist} 
            typoStyleSubline={typoStyleSubline} 
            typoStyleTitle={typoStyleTitle}
            bg={this.state.bg}
            fg={this.state.fg}
            svg={this.state.svg} 
            svgWidth={this.state.svgWidth} 
            svgRotation={this.state.svgRotation} 
            translateX={this.state.translateX}
            translateY={this.state.translateY}
            name={this.state.name} 
            title={this.state.title}
            subline={this.state.subline}
            fontSize={this.state.fontSize*0.01}
            fontWeight={this.state.fontWeight}
          />

      </div>

    );
  }
}

export default App;
