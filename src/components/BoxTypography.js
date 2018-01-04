import React, { Component } from 'react';
import ti from './components/ti';

class BoxTypography extends Component {


  render() {
    return (
    	<div className="group">
    	<div className="boxHead">
            <h3>Typography</h3>
           </div>

           <div className="boxBody">

             <div className="field">
                <h4>font-size</h4>
                <input value={this.props.fontSize} onChange={this.props.changeFontSize}/>
            </div>

              <div className="field">
                <h4>font-family</h4>
            
            <select value={this.props.fontFamily} onChange={this.props.changeFontFamily}>
            
	            <option value="Roboto">Roboto</option>
	            <option value="Courier">Courier</option>
	            <option value="Times">Times</option>

            </select>

            </div>



              <div className="field">
                <h4>text-position</h4>

            <select value={this.props.textPosition} onChange={this.props.changeTextPosition}>
            
              <option value="flex-start">top</option>
              <option value="center">center</option>
              <option value="flex-end">bottom</option>

            </select>

            </div>

            <ti name="font-color" value={this.props.fontColorTitle} onChange={this.props.changeFontColorTitle}/>

            <div className="field">
                <h4>font-color</h4>
                <input value={this.props.fontColorTitle} onChange={this.props.changeFontColorTitle}/>
            </div>



             <div className="field">
                <h4>font-color</h4>
                <input value={this.props.fontColorArtist} onChange={this.props.changeFontColorArtist}/>
            </div>


            <div className="field">
                <h4>font-weight</h4>
            
                  <select value={this.props.fontWeightArtist} onChange={this.changeFontWeightArtist}>
                  
                  <option value="normal">normal</option>
                  <option value="bold">bold</option>

                </select>

            </div>



            <div className="field">
                <h4>text-align</h4>
            
                  <select value={this.props.fontAlignArtist} onChange={this.props.changeFontAlignArtist}>
                  
                  <option value="left">left</option>
                  <option value="center">center</option>
                  <option value="right">right</option>

            </select>

            </div>



                  <div className="field">
                <h4>font-weight</h4>
            
                  <select value={this.props.fontWeightTitle} onChange={this.props.changeFontWeightTitle}>
                  
                  <option value="normal">normal</option>
                  <option value="bold">bold</option>

                </select>

            </div>


            <div className="field">
                <h4>text-align</h4>
                <select value={this.props.fontAlignTitle} onChange={this.props.changeFontAlignTitle}>
                    <option value="left">left</option>
            <option value="center">center</option>
            <option value="right">right</option>
            </select>
            </div>

            </div>
           </div>
    );
  }
}

export default BoxTypography;
