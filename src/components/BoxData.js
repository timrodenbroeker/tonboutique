import React, { Component } from 'react';

class BoxData extends Component {


  render() {
    return (
    	<div className="group">
          <div className="boxHead">
            <h3>Data</h3>
          </div>
          <div className="boxBody">
            <div className="field">
                <h4>artist</h4>
                <input value={this.props.name} onChange={this.props.changeName}/>
            </div>


            <div className="field">
                <h4>title</h4>
                <input value={this.props.title} onChange={this.props.changeTitle}/>
            </div>

            <div className="field">
                <h4>subline</h4>
                <input value={this.props.subline} onChange={this.props.changeSubline}/>
            </div>
         </div>
        </div>
    );
  }
}

export default BoxData;
