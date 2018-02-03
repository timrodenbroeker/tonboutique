import React, { Component } from 'react';

class Stepper extends Component {

  	render() {

    	return (
    		<div className="field">
    		<h4>{this.props.name}</h4>
	    		<div className="stepper">
	    			<button onClick={this.props.decrement} className="stepperBox left">
	    				<div>–</div>
	    			</button>
	    			<div className="stepperBox center">
	    				{this.props.value}
	    			</div>
	    			<button onClick={this.props.increment} className="stepperBox right">
	    				<div>+</div>
	    			</button>
	    		</div>
    		</div>
    	);
  	}
}

export default Stepper;
