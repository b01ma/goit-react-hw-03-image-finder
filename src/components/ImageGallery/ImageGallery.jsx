import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import { Component } from 'react/cjs/react.production.min';
import getImage from 'service/PixabayAPI';

class ImageGallery extends Component {
  state = {
    images: null,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      console.log('пора отправлять запрос');

      getImage(this.props.query)
        .then(r => r.json())
        .then(r => {
          this.setState({ images: r.hits });
        });
    }
  }

  render() {
    const { images } = this.state;
    return (
      <div>
        <div>
          {this.props.query && <p>We are looking for {this.props.query}</p>}
          {console.log(Boolean(images))}
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
      </div>
    );
  }
}

export default ImageGallery;
