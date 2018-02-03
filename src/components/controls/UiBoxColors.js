import React, { Component } from "react";
import ColorField from "../input/ColorField";
import ColorSelect from "../input/ColorSelect";
import Stepper from "../input/Stepper";

class UiBoxColors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
            collapsed: this.props.collapsed
        };
        this.colors = this.props.colors;
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
                            name="Theme"
                            options={this.props.graphics}
                            value={this.props.theme}
                            increment={this.props.nextColorTheme}
                            decrement={this.props.prevColorTheme}
                        />

                        <ColorSelect 
                            name="backgr" 
                            colors={this.props.colors}
                            theme={this.props.theme}
                            target={this.props.bg}
                            changeColor={this.props.changeBg}
                        />

                        <ColorSelect 
                            name="main" 
                            colors={this.props.colors}
                            theme={this.props.theme}
                            target={this.props.fg}
                            changeColor={this.props.changeFg}
                        />
                                
                </div>
                )}
            </div>
        );
    }
}

export default UiBoxColors;
