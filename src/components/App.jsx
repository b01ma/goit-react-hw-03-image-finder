import { Component } from 'react/cjs/react.production.min';
import css from './App.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Massage from './Massage/Massage';
import Modal from './Modal/Modal';
// import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    totalHits: 0,
    hitsPerPage: 10,
    largeImageUrl: null,
  };

  getFormInputQuery = query => {
    this.setState({ query, page: 1 });
  };

  getImagesInfo = totalHits => {
    this.setState({
      totalHits,
    });
  };

  getLargeImgUrl = url => {
    console.log(url);

    this.setState({ largeImageUrl: url });
  };

  handleClick = e => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log('click');
  };

  showLoadMoreButton = () => {
    const { totalHits, hitsPerPage, page } = this.state;
    if (totalHits / hitsPerPage <= page) {
      return false;
    } else {
      return true;
    }
  };

  closeModal = () => {
    console.log('time to close modal');
    this.setState({ largeImageUrl: null });
  };

  render() {
    const { query, largeImageUrl, page, hitsPerPage } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.getFormInputQuery} />

        {this.state.query && <Massage query={query} />}

        <ImageGallery
          query={query}
          currentPage={page}
          getInfo={this.getImagesInfo}
          hitsPerPage={hitsPerPage}
          getImgUrl={this.getLargeImgUrl}
        />

        {/* <Loader /> */}

        {this.showLoadMoreButton() && <Button onClick={this.handleClick} />}

        {largeImageUrl && (
          <Modal
            largeImageUrl={largeImageUrl}
            closeModal={this.closeModal}
          ></Modal>
        )}
      </div>
    );
  }
}
