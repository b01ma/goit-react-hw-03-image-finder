import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import { Component } from 'react/cjs/react.production.min';
import getImage from 'service/PixabayAPI';
import Button from 'components/Button/Button';
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';

class ImageGallery extends Component {
  state = {
    images: null,
    page: 1,
    initialPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      console.log('new query - пора отправлять запрос');

      getImage(this.props.query, this.state.initialPage)
        .then(r => r.json())
        .then(r => {
          this.setState({ images: r.hits });
        });

      this.setState({ page: this.state.initialPage });
    }

    if (
      prevState.page !== this.state.page &&
      this.state.page !== this.state.initialPage
    ) {
      console.log('new page - пора отправлять запрос');
      getImage(this.props.query, this.state.page)
        .then(r => r.json())
        .then(r => {
          this.setState({ images: [...this.state.images, ...r.hits] });
        });
    }
  }

  handleClick = e => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log('click');
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <div>
          {this.props.query && (
            <p className={css.p}>We are looking for {this.props.query}</p>
          )}
          {console.log('Есть картинки:', Boolean(images))}
        </div>

        <ul className={css.gallery}>
          {images &&
            images.map(image => (
              <ImageGalleryItem
                key={image.id}
                previewUrl={image.webformatURL}
              />
            ))}
        </ul>
        {images && <Button onClick={this.handleClick} />}
      </div>
    );
  }
}

export default ImageGallery;
