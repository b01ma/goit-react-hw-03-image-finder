import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ previewUrl, largeUrl, getImgUrl }) => {
  const handleClick = () => {
    getImgUrl(largeUrl);
  };

  return (
    <li className={css.item}>
      <img
        onClick={handleClick}
        className={css.itemImage}
        src={previewUrl}
        alt=""
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  previewUrl: PropTypes.string,
  largeUrl: PropTypes.string,
  getImgUrl: PropTypes.func,
};

export default ImageGalleryItem;
