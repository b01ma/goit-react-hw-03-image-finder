import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ previewUrl }) => {
  return (
    <li className={css.item}>
      <img className={css.itemImage} src={previewUrl} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
