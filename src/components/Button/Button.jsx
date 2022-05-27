import css from './Button.module.css';

const Button = ({ children, onClick }) => {
  return (
    <button type="submit" className={css.button} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
