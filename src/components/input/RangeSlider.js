import React, { Component } from 'react';

class RangeSlider extends Component {

  render() {
    return (
        
        <div className="field">
            <h4>{this.props.name}</h4>
            <div className="sliderContainer">
                <input onChange={this.props.onChange} type="range" min={this.props.min} max={this.props.max} value={this.props.value} className="inputRangeSlider" step={this.props.step} />
            </div>
		</div>
    );
  }
}

export default RangeSlider;
