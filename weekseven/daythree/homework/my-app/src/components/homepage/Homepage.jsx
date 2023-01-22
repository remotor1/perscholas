// Homepage
import React from 'react';
import Header from '../header/Header';
import SearchBar from '../searchbar/SearchBar';
import EmployeeList from '../employeelist/EmployeeList';

import './Homepage.css';

export default class Homepage extends React.Component {
  render() {
    return (
      <div className='homepage'>
        <Header name='pizda' />
        <SearchBar name='pizda' />
        <EmployeeList name='pizda' />
      </div>
    );
  }
}
