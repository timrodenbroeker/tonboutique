import React, { Component } from "react";
import ColorField from "../input/ColorField";

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
        const theColors = this.colors.map(color => (
            <ColorField color={color} changeColor={this.props.changeColor} />
        ));

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
                        <div className="boxBodyColors">{theColors}</div>
                    </div>
                )}
            </div>
        );
    }
}

export default UiBoxColors;
