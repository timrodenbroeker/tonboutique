import React, { Component } from 'react';
import TextInput from '../../input/TextInput';

class UiBoxData extends Component {


  render() {
    return (
    	<div className="group">
          <div className="boxHead">
            <h3>Data</h3>
          </div>
          <div className="boxBody">
            <TextInput 
                name="Artist" 
                value={this.props.artist} 
                onChange={this.props.onChangeArtist}
            />

            <TextInput 
                name="Title" 
                value={this.props.title} 
                onChange={this.props.onChangeTitle}
            />

            <TextInput 
                name="Subline" 
                value={this.props.subline} 
                onChange={this.props.onChangeSubline}
            />

         </div>
        </div>
    );
  }
}

export default UiBoxData;
