import React, { Component } from 'react';

class Color extends Component {



  render() {

    const css = {background: this.props.hex};

    return (
    	
		  <div className="colorWrapper color" style={css} onClick={this.handleClick}/>

    );
  }
}

export default Color;
