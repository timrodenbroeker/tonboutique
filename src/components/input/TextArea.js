import React, { Component } from 'react';

class TextArea extends Component {


  render() {
    return (
    	
      <div className="field">
			<h4>{this.props.name}</h4>
			<textarea className="textInput" value={this.props.value} onChange={this.props.onChange}/>
		</div>
      
    );
  }
}

export default TextArea;
