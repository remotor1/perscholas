// @ts-check
/* eslint-disable react/prefer-stateless-function */

import React from 'react';

// BEGIN (write your solution here)
export default class ListGroup extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ul className='list-group'>
        {React.Children.map(children, (item) => (
          <li className='list-group-item'>{item}</li>
        ))}
      </ul>
    );
  }
}
// END
// export default class ListGroup extends React.Component {
//     render() {
//       const { children } = this.props;
//       return (
//         <ul className="list-group">
//           {React.Children.map(children, (item) => <li className="list-group-item">{item}</li>)}
//         </ul>
//       );
//     }
//   }
