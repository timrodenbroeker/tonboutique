import React from 'react';
import Color from './Color';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  
constructor(props){
    super(props);
    this.state = {
      color: this.props.hex
    }
  
    this.handleClick = this.handleClick.bind(this);

  }

    handleClick(event){
    this.setState({
      subline: event.target.hex
    });
  }

  render() {

    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }


    return (
      <div className="backdrop">
        <div className="modal ModalColors">
          <Color onClick={this.handleClick} hex="#111111"/>
          <Color onClick={this.handleClick} hex="#ff0000"/>
          <Color onClick={this.handleClick} hex="#0000ff"/>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;