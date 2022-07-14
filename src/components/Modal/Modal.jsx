import css from './Modal.module.css';
import Loader from 'components/Loader/Loader';
import { Component } from 'react/cjs/react.production.min';

export class Modal extends Component {
  state = {
    loader: true,
  };

  handleClick = () => {
    this.props.closeModal();
  };

  handleOnLoad = () => {
    console.log('on load worked');
    this.setState({ loader: false });
  };

  handleOnError = () => {
    console.log('something went wrong, no image');
  };

  handleOverlayClick = e => {
    console.log(e.target);

    if (e.target == e.currentTarget) {
      this.props.closeModal();
    }
  };

  handleKeyPress = e => {
    console.log(e.keyCode);
    if (e.keyCode == 27) {
      console.log('pressed ESC - time to slose modal');
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div
        className={css.overlay}
        onClick={this.handleOverlayClick}
        tabIndex={0}
        onKeyDown={this.handleKeyPress}
      >
        <div className={css.modal}>
          {this.state.loader && <Loader />}

          <img
            src={this.props.largeImageUrl}
            alt=""
            onLoad={this.handleOnLoad}
            onError={this.handleOnError}
          />
        </div>

        <button type="button" onClick={this.handleClick}>
          Close
        </button>
      </div>
    );
  }
}

export default Modal;
