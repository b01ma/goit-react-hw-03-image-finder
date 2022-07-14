import css from './Massage.module.css';

const Massage = ({ query }) => {
  return (
    <div>
      <p className={css.massage}>We are looking for {query}</p>
    </div>
  );
};

export default Massage;
