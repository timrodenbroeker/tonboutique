import React, { Component } from 'react';

class ti extends Component {


  render() {
    return (
    	
      <div className="field">
			<h4>{this.props.name}</h4>
			<input value={this.props.value} onChange={this.props.onChange}/>
		</div>
      
    );
  }
}

export default ti;
