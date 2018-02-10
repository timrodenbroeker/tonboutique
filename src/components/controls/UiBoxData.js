import React, { Component } from 'react';
import TextInput from '../input/TextInput';

class UiBoxData extends Component {
constructor(props){
    super(props);
    this.state = {
        collapsed: this.props.collapsed
        }
    this.collapseBox = this.collapseBox.bind(this);        
    }

    collapseBox(){
        this.setState({collapsed: !this.state.collapsed});
    }

  render() {
    return (
    	<div className="group">
          <div className="boxHead">
            <h3 
                  className={this.state.collapsed ? 'lighten' : 'active'} 
                    onClick={this.collapseBox} >
                    {this.props.name}
                </h3>
          </div>


          {this.state.collapsed === false &&

          <div className="boxBody">
          <div className="boxBodyInner">
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

       }
        </div>
    );
  }
}

export default UiBoxData;
