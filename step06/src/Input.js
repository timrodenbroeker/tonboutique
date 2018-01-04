import React, { Component } from 'react';

class Input extends Component {


  render() {
    return (
    	<input value={this.props.value} onChange={this.props.onChange}/>
    );
  }
}

export default Input;
