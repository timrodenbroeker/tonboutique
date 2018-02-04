import React, { Component } from "react";
import RangeSlider from "../input/RangeSlider";
import SelectInput from "../input/SelectInput";

class UiBoxTypography extends Component {
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
                    <SelectInput
                            name="Family"
                            value={this.props.fontFamily}
                            options={this.props.fonts}
                            onChange={this.props.changeFontFamily}
                        />

                        <RangeSlider
                            name="Size"
                            value={this.props.fontSize}
                            min="3"
                            max="20"
                            onChange={this.props.changeFontSize}
                        />

                        <RangeSlider
                            name="Weight"
                            value={this.props.fontWeight}
                            min="300"
                            max="900"
                            step={100}
                            onChange={this.props.changeFontWeight}
                        />

                        {/* 

            <SelectInput 
                name="Font-Family" 
                options={this.props.availableFonts} 
                value={this.props.fontFamily} 
                onChange={this.props.changeFontFamily}
            />
              

            <SelectInput 
                name="Align-Artist" 
                options={["left","center","right"]} 
                value={this.props.fontAlignArtist} 
                onChange={this.props.changeFontAlignArtist}
            />  

            <SelectInput 
                name="Align-Title" 
                options={["left","center","right"]} 
                value={this.props.fontAlignTitle} 
                onChange={this.props.changeFontAlignTitle}
            />  

        */}
                    </div>
                )}
            </div>
        );
    }
}

export default UiBoxTypography;
