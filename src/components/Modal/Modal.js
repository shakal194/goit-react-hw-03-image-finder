import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export class Modal extends Component {
  static defaultProps = { onClose: null, children: null };

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={s.overlay} onClick={this.handleOverlayClick}>
        <div className={s.modal}>{this.props.children}</div>
      </div>
    );
  }
}
