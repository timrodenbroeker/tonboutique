import React, { Component } from "react";
import UiBoxData from "./UiBoxData";
import UiBoxTypography from "./UiBoxTypography";
import UiBoxGraphic from "./UiBoxGraphic";
import UiBoxColors from "./UiBoxColors";
import UiBoxActions from "./UiBoxActions";
import UiBoxView from "./UiBoxView";

class ControlBoxLeft extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapseData : true,
            collapseTypography : true,
            collapseGraphic: true,
            collapseColors : true,
            collapseView : true,
            collapseActions : true
        }
    }

    render() {
        return (
            <main id="main">
                <section id="controlsLeft">
                    <UiBoxData
                        name="Data"
                        collapsed={this.state.collapseData}
                        artist={this.props.name}
                        onChangeArtist={this.props.changeName}
                        title={this.props.title}
                        onChangeTitle={this.props.changeTitle}
                        subline={this.props.subline}
                        onChangeSubline={this.props.changeSubline}
                    />

                    <UiBoxTypography
                        name="Typography"
                        collapsed={this.state.collapseTypography}
                        fontSize={this.props.fontSize}
                        changeFontSize={this.props.changeFontSize}
                        fontWeight={this.props.fontWeight}
                        changeFontWeight={this.props.changeFontWeight}
                        fontWeightTitle={this.props.fontWeightTitle}
                        changeFontWeightTitle={this.props.changeFontWeightTitle}
                        availableFonts={this.props.availableFonts}
                        fontFamily={this.props.fontFamily}
                        changeFontFamily={this.props.changeFontFamily}
                        fontAlignArtist={this.props.fontAlignArtist}
                        changeFontAlignArtist={this.props.changeFontAlignArtist}
                        fontAlignTitle={this.props.fontAlignTitle}
                        changeFontAlignTitle={this.props.changeFontAlignTitle}
                        fonts={this.props.fonts}
                        changeFontFamily={this.props.changeFontFamily}
                        fontTranslateY={this.props.fontTranslateY}
                        changeFontTranslateY={this.props.changeFontTranslateY}
                    />

                    <UiBoxGraphic
                        name="Graphic"
                        collapsed={this.state.collapseGraphic}
                        arr={this.props.arr}
                        svg={this.props.svg}
                        scale={this.props.scale}
                        changeScale={this.props.changeScale}
                        changeSvg={this.props.changeSvg}
                        svgRotation={this.props.svgRotation}
                        changeSvgRotation={this.props.changeSvgRotation}
                        translateX={this.props.translateX}
                        changeTranslateX={this.props.changeTranslateX}
                        translateY={this.props.translateY}
                        changeTranslateY={this.props.changeTranslateY}
                        nextGraphic={this.props.nextGraphic}
                        prevGraphic={this.props.prevGraphic}
                        graphics={this.props.graphics}
                        toggleSvgModal={this.props.toggleSvgModal}
                    />

                    <UiBoxColors
                        name="Colors"
                        collapsed={this.state.collapseColors}
                        color={this.props.bg}
                        changeBg={this.props.changeBg}
                        changeFg={this.props.changeFg}
                        colors={this.props.colors}
                        theme={this.props.theme}
                        nextColorTheme={this.props.nextColorTheme}
                        prevColorTheme={this.props.prevColorTheme}
                    />

                    <UiBoxView
                        collapsed={this.state.collapseView}
                        view={this.props.view}
                        options={this.props.views}
                        nextView={this.props.nextView}
                        prevView={this.props.prevView}
                    />

                    <UiBoxActions
                        collapsed={this.state.collapseActions}
                        name="Actions"
                        saveCanvas={this.props.saveCanvas}
                    />

                    
                </section>
            </main>
        );
    }
}

export default ControlBoxLeft;
