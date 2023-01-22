//SearchBar
import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
  render() {
    return (
      <form className='searchbar'>
        <input className='searchbar__input' type='text' name='name' />
      </form>
    );
  }
}
