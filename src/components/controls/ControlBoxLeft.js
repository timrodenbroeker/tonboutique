import React, { Component } from "react";
import UiBoxData from "./UiBoxData";
import UiBoxTypography from "./UiBoxTypography";
import UiBoxGraphic from "./UiBoxGraphic";
import UiBoxColors from "./UiBoxColors";
import UiBoxExport from "./UiBoxExport";
import UiBoxView from "./UiBoxView";

class ControlBoxLeft extends Component {
    test() {
        alert("a");
    }
    render() {
        return (
            <main id="main">
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
                        name="Font"
                        collapsed={false}
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
                        fonts={this.props.fonts}
                        changeFontFamily={this.props.changeFontFamily}
                    />

                    <UiBoxGraphic
                        name="Graphic"
                        collapsed={false}
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
                    />

                    <UiBoxColors
                        name="Color"
                        collapsed={false}
                        color={this.props.bg}
                        changeBg={this.props.changeBg}
                        changeFg={this.props.changeFg}

                        colors={this.props.colors}
                        theme={this.props.theme}
                        nextColorTheme={this.props.nextColorTheme}
                        prevColorTheme={this.props.prevColorTheme}
                    />

                    <UiBoxView 
                        collapsed={false}
                        view={this.props.view}
                        options={this.props.views}
                        nextView={this.props.nextView}
                        prevView={this.props.prevView}
                    />

                    <div id="fontloader">
                        <div className="fw300">Aa</div>
                        <div className="fw400">Aa</div>
                        <div className="fw500">Aa</div>
                        <div className="fw600">Aa</div>
                        <div className="fw700">Aa</div>
                        <div className="fw800">Aa</div>
                        <div className="fw900">Aa</div>
                        
                    </div>

                    <UiBoxExport name="Save" onClick={this.test} />
                </section>
            </main>
        );
    }
}

export default ControlBoxLeft;
