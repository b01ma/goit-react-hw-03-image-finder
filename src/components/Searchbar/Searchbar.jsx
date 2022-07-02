import css from './Searchbar.module.css';
import Button from 'components/Button/Button';
import { ReactComponent as SearchIcon } from '../../icons/search-icon.svg';

const { Component } = require('react/cjs/react.production.min');

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      alert('ты за кого меня принимаешь? введи хоть что-то');
      return;
    }

    this.props.onSubmit(this.state.query);

    this.setState({
      query: '',
    });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <input
            onChange={this.handleChange}
            value={this.state.query}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
          />
          <Button>
            <SearchIcon width="20" hieght="20" />
          </Button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
