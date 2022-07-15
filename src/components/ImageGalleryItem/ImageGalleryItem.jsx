import css from './ImageGalleryItem.module.css';

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

export default ImageGalleryItem;
