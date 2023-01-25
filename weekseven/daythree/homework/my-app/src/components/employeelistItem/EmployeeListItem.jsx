//EmployeeListItem
import React from 'react';
import './EmployeeListItem.css';
//import photo from '../employeelist/imgs/photo.jpg'; // Путь к изображению внутри сборки

export default class EmployeeListItem extends React.Component {
  render() {
    const { data } = this.props;
    console.log('data ---- ', data);
    return (
      <ul className='employeeListItem'>
        {data.map((item, index) => (
          <li key={index} className='employeeListItem__element'>
            <img
              src={item.pics}
              alt={item.name}
              className='employeeListItem__photo'
            />

            <div className='employeeListItem__info'>
              <p className='employeeListItem__name'>{`${item.firstname} ${item.lastname}`}</p>

              <p className='employeeListItem__position'>{item.position}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
