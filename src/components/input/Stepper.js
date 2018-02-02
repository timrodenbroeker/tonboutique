import React, { Component } from 'react';

class Stepper extends Component {

  	render() {

    	return (
    		<div className="field">
    		<h4>{this.props.name}</h4>
	    		<div className="stepper">
	    			<button onClick={this.props.decrement}>-</button>
	    			{this.props.value}
	    			<button onClick={this.props.increment}>+</button>
	    		</div>
    		</div>
    	);
  	}
}

export default Stepper;
