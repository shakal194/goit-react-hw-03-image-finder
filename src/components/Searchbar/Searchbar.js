import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Searchbar.module.css';

export class Searchbar extends Component {
  static defaultProps = { onSubmit: null };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    searchQuery: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { searchQuery } = this.state;
    const normalizeSearchQuery = searchQuery.trim().toLowerCase();

    if (!normalizeSearchQuery) {
      return;
    }

    this.props.onSubmit(normalizeSearchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.searchFormButton}>
            <span className={s.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.searchFormInput}
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
