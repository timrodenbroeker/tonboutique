import React, { Component } from "react";
import "./normalize.css";
import "./App.css";
import Canvas from "./components/cover/Canvas";
import ControlBoxLeft from "./components/controls/ControlBoxLeft";
import SvgModal from "./components/input/SvgModal";

class App extends Component {
    constructor(props) {
        super(props);

        this.colors = [
            [
                "#eeeeee",
                "#cccccc",
                "#aaaaaa",
                "#888888",
                "#666666",
                "#444444",
                "#222222"
            ],
            [
                "#BC9178",
                "#23255E",
                "#DC9D35",
                "#897BBF",
                "#4B4A81",
                "#2E1C38",
                "#403939",
                "#2A584E",
                "#CB4A34"
            ],
            [
                "#A9B3BD",
                "#73584D",
                "#678EAD",
                "#AB7B71",
                "#43677F",
                "#434957",
                "#2E5080"
            ],
            ["#B2ABA3", "#9B978B", "#686868", "#3D3D3D", "#EA5D4A"],
            ["#552B14", "#FF2C00"],
            ["#00BC5C", "#000000"]
        ];

        this.fonts = ["Arial", "Times", "Franklin", "RobotoMono"];

        this.graphics = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

        this.views = [1, 2, 3];

        this.state = {
            name: "Maxon",
            title: "Flash",
            subline: "Including a remix by Alexander Franz",
            scale: 0.8,
            svg: this.graphics[0],

            width: 2000,
            height: 2000,

            svgWidth: 444,
            svgHeight: 444,

            svgRotation: 0,
            translateX: 0,
            translateY: 0,

            fontSize: 8,
            fontFamily: this.fonts[0],
            fontWeight: 600,
            fontWeightTitle: 600,
            fontAlignArtist: "left",
            fontAlignTitle: "right",
            textPosition: "top",
            fontTranslateY: 0,

            bg: this.colors[0][0],
            fg: this.colors[0][this.colors[0].length - 1],

            ModalColorsCollapsed: true,
            availableFonts: ["lf"],

            isOpen: false,
            viewRotationY: 0,
            viewScale: 1,

            theme: 0,

            view: 1,

            svgModalOpen: false
        };

        this.changeName = this.changeName.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.changeSubline = this.changeSubline.bind(this);
        this.changeFontSize = this.changeFontSize.bind(this);
        this.changeFontFamily = this.changeFontFamily.bind(this);

        this.changeFontAlignArtist = this.changeFontAlignArtist.bind(this);
        this.changeFontWeight = this.changeFontWeight.bind(this);
        this.changeFontWeightTitle = this.changeFontWeightTitle.bind(this);
        this.changeFontAlignTitle = this.changeFontAlignTitle.bind(this);
        this.changeFontColor = this.changeFontColor.bind(this);
        this.changeTextPosition = this.changeTextPosition.bind(this);

        this.changeBg = this.changeBg.bind(this);

        this.changeSvg = this.changeSvg.bind(this);
        this.changeScale = this.changeScale.bind(this);
        this.changeFg = this.changeFg.bind(this);
        this.changeSvgRotation = this.changeSvgRotation.bind(this);

        this.changeTranslateX = this.changeTranslateX.bind(this);
        this.changeTranslateY = this.changeTranslateY.bind(this);

        this.changeViewRotationY = this.changeViewRotationY.bind(this);
        this.changeViewScale = this.changeViewScale.bind(this);

        this.savePng = this.savePng.bind(this);

        this.nextGraphic = this.nextGraphic.bind(this);
        this.prevGraphic = this.prevGraphic.bind(this);

        this.nextColorTheme = this.nextColorTheme.bind(this);
        this.prevColorTheme = this.prevColorTheme.bind(this);

        this.nextView = this.nextView.bind(this);
        this.prevView = this.prevView.bind(this);

        this.changeFontTranslateY = this.changeFontTranslateY.bind(this);

        this.pickSvg = this.pickSvg.bind(this);

        this.toggleSvgModal = this.toggleSvgModal.bind(this);
    }

    nextGraphic() {
        if (this.state.svg < this.graphics.length) {
            this.setState({ svg: this.state.svg + 1 });
        } else {
            this.setState({ svg: 1 });
        }
    }

    changeFontTranslateY(event) {
        this.setState({ fontTranslateY: event.target.value });
    }

    prevGraphic() {
        if (this.state.svg > 1) {
            this.setState({ svg: this.state.svg - 1 });
        } else {
            this.setState({ svg: this.graphics.length });
        }
    }

    nextView() {
        if (this.state.view < this.views.length) {
            this.setState({ view: this.state.view + 1 });
        } else {
            this.setState({ view: 1 });
        }
    }

    prevView() {
        if (this.state.view > 1) {
            this.setState({ view: this.state.view - 1 });
        } else {
            this.setState({ svg: this.views.length });
        }
    }

    nextColorTheme() {
        if (this.state.theme < this.colors.length - 1) {
            this.setState({ theme: this.state.theme + 1 });
        } else {
            this.setState({ theme: 0 });
        }
    }

    prevColorTheme() {
        if (this.state.theme > 0) {
            this.setState({ theme: this.state.theme - 1 });
        } else {
            this.setState({ theme: this.colors.length - 1 });
        }
    }

    changeName(event) {
        this.setState({ name: event.target.value });
    }

    changeSubline(event) {
        this.setState({ subline: event.target.value });
    }

    changeBg(event) {
        alert("Hi!");
        this.setState({ bg: event.target.bg });
    }

    changeTitle(event) {
        this.setState({ title: event.target.value });
    }

    changeFontSize(event) {
        this.setState({ fontSize: event.target.value });
    }

    changeFontFamily(event) {
        this.setState({ fontFamily: event.target.value });
    }

    changeFontAlignArtist(event) {
        this.setState({ fontAlignArtist: event.target.value });
    }

    changeFontColor(event) {
        this.setState({ fontColor: event.target.value });
    }

    changeFontAlignTitle(event) {
        this.setState({ fontAlignTitle: event.target.value });
    }

    changeFontWeight(event) {
        this.setState({ fontWeight: event.target.value });
    }

    changeFontWeightTitle(event) {
        this.setState({ fontWeightTitle: event.target.value });
    }

    changeTextPosition(event) {
        this.setState({ textPosition: event.target.value });
    }

    changeSvg(event) {
        this.setState({ svg: event.target.value });
    }

    changeFg(event) {
        this.setState({ fg: event.target.value });
    }

    changeScale(event) {
        this.setState({ scale: event.target.value });
    }

    toggleModalColors(event) {
        this.setState({
            ModalColorsCollapsed: !this.state.ModalColorsCollapsed
        });
    }

    changeViewScale(event) {
        this.setState({ viewScale: event.target.value });
    }

    changeViewRotationY(event) {
        this.setState({ viewRotationY: event.target.value });
    }

    changeSvgRotation(event) {
        this.setState({ svgRotation: event.target.value });
    }

    changeTranslateX(event) {
        this.setState({ translateX: event.target.value });
    }

    changeTranslateY(event) {
        this.setState({ translateY: event.target.value });
    }

    pickBg(event) {
        this.setState({ bg: event.target.getAttribute("color") });
    }

    pickFg(event) {
        this.setState({ fg: event.target.getAttribute("color") });
    }

    pickSvg(event) {
        this.setState({
            svg: event.target.getAttribute("id"),
            svgModalOpen: false
        });
    }

    toggleSvgModal() {
        this.setState({
            svgModalOpen: !this.state.svgModalOpen
        });
    }

    savePng() {
        var c = document.getElementById("theCanvas");
        var image = c
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream"); // here is the most important part because if you dont replace you will get a DOM 18 exception.

        alert("a");
        window.location.href = image; // it will save locally
    }

    render() {
        return (
            <div className="App">
                <ControlBoxLeft
                    svg={this.state.svg}
                    changeSvg={this.changeSvg}
                    scale={this.state.scale}
                    changeScale={this.changeScale}
                    svgRotation={this.state.svgRotation}
                    changeSvgRotation={this.changeSvgRotation}
                    name={this.state.name}
                    changeName={this.changeName}
                    title={this.state.title}
                    changeTitle={this.changeTitle}
                    subline={this.state.subline}
                    changeSubline={this.changeSubline}
                    fontTranslateY={this.state.fontTranslateY}
                    changeFontTranslateY={this.changeFontTranslateY}
                    fontSize={this.state.fontSize}
                    changeFontSize={this.changeFontSize}

                    // FontWeight
                    fontWeight={this.state.fontWeight}
                    changeFontWeight={this.changeFontWeight}
                    fontWeightTitle={this.state.fontWeightTitle}
                    changeFontWeightTitle={this.changeFontWeightTitle}
                    
                    fontFamily={this.state.fontFamily}
                    changeFontFamily={this.changeFontFamily}
                    fontAlignArtist={this.state.fontAlignArtist}
                    changeFontAlignArtist={this.changeFontAlignArtist}
                    fontAlignTitle={this.state.fontAlignTitle}
                    changeFontAlignTitle={this.changeFontAlignTitle}
                    fonts={this.fonts}
                    // Translate
                    translateX={this.state.translateX}
                    changeTranslateX={this.changeTranslateX}
                    translateY={this.state.translateY}
                    changeTranslateY={this.changeTranslateY}
                    // Graphic
                    nextGraphic={this.nextGraphic}
                    prevGraphic={this.prevGraphic}
                    graphics={this.graphics}
                    toggleSvgModal={this.toggleSvgModal}
                    // COLORS
                    colors={this.colors}
                    theme={this.state.theme}
                    nextColorTheme={this.nextColorTheme}
                    prevColorTheme={this.prevColorTheme}
                    bg={this.state.bg}
                    changeBg={event => this.pickBg(event)}
                    fg={this.state.fg}
                    changeFg={event => this.pickFg(event)}
                    // View
                    view={this.state.view}
                    views={this.views}
                    nextView={this.nextView}
                    prevView={this.prevView}
                />

                <Canvas
                    // COLORS
                    bg={this.state.bg}
                    fg={this.state.fg}
                    // SVG
                    svg={this.state.svg}
                    scale={this.state.scale}
                    svgRotation={this.state.svgRotation}
                    svgWidth={this.state.svgWidth}
                    svgHeight={this.state.svgHeight}
                    translateX={this.state.translateX}
                    translateY={this.state.translateY}
                    // SIZE
                    width={this.state.width}
                    height={this.state.height}
                    // DATA
                    artist={this.state.name}
                    title={this.state.title}
                    subline={this.state.subline}
                    // TYPOGRAPHY
                    fontFamily={this.state.fontFamily}
                    fontSize={this.state.fontSize * 0.01}
                    fontWeight={this.state.fontWeight}
                    fontWeightTitle={this.state.fontWeightTitle}
                    fontTranslateY={this.state.fontTranslateY}
                    // EXPORT
                    savePng={this.savePng}
                    // VIEW
                    view={this.state.view}
                />

                <SvgModal
                    open={this.state.svgModalOpen}
                    graphics={this.graphics}
                    pickSvg={this.pickSvg}
                />
            </div>
        );
    }
}

export default App;
