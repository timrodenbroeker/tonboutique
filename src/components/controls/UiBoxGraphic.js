import React, { Component } from "react";
import RangeSlider from "../input/RangeSlider";
import Stepper from "../input/Stepper";

class UiBoxGraphic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: this.props.collapsed
        };
        this.collapseBox = this.collapseBox.bind(this);
    }

    collapseBox() {
        this.setState({ collapsed: !this.state.collapsed });
    }

    render() {
        return (
            <div className="group">
                <div className="boxHead">
                    <h3
                        className={this.state.collapsed ? "lighten" : "active"}
                        onClick={this.collapseBox}
                    >
                        {this.props.name}
                    </h3>
                </div>

                {this.state.collapsed === false && (
                    <div className="boxBody">
                        <Stepper
                            name="File"
                            options={this.props.graphics}
                            value={this.props.svg}
                            increment={this.props.nextGraphic}
                            decrement={this.props.prevGraphic}
                        />

                        <RangeSlider
                            name="Size"
                            value={this.props.scale}
                            min="0"
                            max="2"
                            step={0.01}
                            onChange={this.props.changeScale}
                        />

                        <RangeSlider
                            name="Rotate"
                            value={this.props.svgRotation}
                            min="0"
                            max="360"
                            onChange={this.props.changeSvgRotation}
                        />

                         <RangeSlider
                            name="x"
                            value={this.props.translateX}
                            min="-200"
                            max="200"
                            onChange={this.props.changeTranslateX}
                        />

                         <RangeSlider
                            name="y"
                            value={this.props.translateY}
                            min="-200"
                            max="200"
                            onChange={this.props.changeTranslateY}
                        />

                    </div>
                )}
            </div>
        );
    }
}

export default UiBoxGraphic;
