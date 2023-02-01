import React, { useState } from 'react';
const Students = (props) => {
  const result = props.studentData.map((item, index) => {
    return (
      <li key={index}>
        <p>Name - {item.name}</p>
        <p>bio - {item.bio}</p>
        {item.scores.map((element, index) => {
          return (
            <p key={index}>
              {element.date}
              {element.score}
            </p>
          );
        })}
      </li>
    );
  });

  console.log('result', result);

  return result;
};

export default Students;
