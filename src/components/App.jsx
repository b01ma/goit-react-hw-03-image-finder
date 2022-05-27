import { Component } from 'react/cjs/react.production.min';
import Searchbar from './Searchbar/Searchbar';
import css from './App.module.css';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: null,
  };

  getQuery = query => {
    this.setState({
      query,
    });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.getQuery} />
        <ImageGallery />

        {/* <Loader /> */}

        {/* <Modal /> */}
      </div>
    );
  }
}
