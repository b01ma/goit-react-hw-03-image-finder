import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ path, discription }) => {
  return (
    <li className={css.item}>
      <img className={css.itemImage} src={path} alt={discription} />
    </li>
  );
};

export default ImageGalleryItem;
