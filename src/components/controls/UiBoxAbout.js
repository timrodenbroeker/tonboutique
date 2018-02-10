import React, { Component } from "react";

class UiBoxView extends Component {
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
            About
          </h3>
        </div>

        {this.state.collapsed === false && (
          <div className="boxBody">
            <div className="boxBodyInner">
              <p>This is an experimental WebApplication by Tim Rodenbröker. Find out more about this project <a target="_blank" href="http://www.timrodenbroeker.de">here</a>.</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UiBoxView;
