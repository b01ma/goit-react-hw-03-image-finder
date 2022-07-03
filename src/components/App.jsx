import { Component } from 'react/cjs/react.production.min';
import Searchbar from './Searchbar/Searchbar';
import css from './App.module.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

export class App extends Component {
  state = {
    query: '',
  };

  getFormInputQuery = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.getFormInputQuery} />

        <ImageGallery query={this.state.query} />

        {/* <Loader /> */}

        {/* <Modal /> */}
      </div>
    );
  }
}
