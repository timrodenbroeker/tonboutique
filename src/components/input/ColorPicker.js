import React from 'react';
import Color from './Color';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {

    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }


    return (
      <div className="backdrop">
        <div className="modal ModalColors">

          {this.props.children}

          <div className="ModalBtnClose">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>

          <div className="ModalBtnTheme">
            <button onClick={this.props.onClose}>
              Theme
            </button>
          </div>


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