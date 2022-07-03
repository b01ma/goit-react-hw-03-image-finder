import css from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button className={css.button} type="button" onClick={() => onClick()}>
      Load More
    </button>
  );
};

export default Button;
