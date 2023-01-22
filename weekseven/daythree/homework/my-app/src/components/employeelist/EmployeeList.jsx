//EmployeeList
import React from 'react';
import './EmployeeList.css';
import EmployeeListItem from '../employeelistItem/EmployeeListItem';
import photo from './imgs/photo.jpg'; // Путь к изображению внутри сборки

const items = [
  {
    firstname: 'James',
    lastname: 'King',
    position: 'President and CEO',
    pics: photo,
  },
  {
    firstname: 'Julie',
    lastname: 'Taylor',
    position: 'VP of Marketing',
    pics: photo,
  },
  {
    firstname: 'Eugene',
    lastname: 'Lee',
    position: 'CFO',
    pics: photo,
  },
  {
    firstname: 'John',
    lastname: 'Williams',
    position: 'VP of Engineering',
    pics: photo,
  },
  {
    firstname: 'Ray',
    lastname: 'Moore',
    position: 'VP of Sales',
    pics: photo,
  },
  {
    firstname: 'Paul',
    lastname: 'Jones',
    position: 'QA Manager',
    pics: photo,
  },
];

export default class EmployeeList extends React.Component {
  render() {
    return (
      <div className='employeelist'>
        <EmployeeListItem data={items} />
      </div>
    );
  }
}
