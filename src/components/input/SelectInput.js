import React, { Component } from 'react';

class SelectInput extends Component {


  render() {


  	 var Data = this.props.options,
            MakeItem = function(X) {
                return <option>{X}</option>;
            };

    return (
    	
        <div className="field">
			<h4>{this.props.name}</h4>
            
            <select value={this.props.value} onChange={this.props.onChange}>
            
				{Data.map(MakeItem)}

            </select>

		</div>
      
    );
  }
}

export default SelectInput;
