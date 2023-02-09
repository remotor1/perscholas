import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import './Button.css';
import './Input.css';
import api from './api'

const cardData = [
  {
    link: '....',
    title: 'title1',
    subtitle: 'subtitle1'
  },
  {
    link: '....',
    title: 'title2',
    subtitle: 'subtitle2'
  },
  {
    link: '....',
    title: 'title3',
    subtitle: 'subtitle3'
  },
  {
    link: '....',
    title: 'title4',
    subtitle: 'subtitle4'
  },
]



function App() {
  let [inputValue, setInputValue] = useState('text2');
  let [cardsData, setcardsData] = useState([]);
  const inputRef = useRef(false);

  useEffect(() => {
    console.log('chenched', inputValue);
  }, [inputValue])

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('inputRef', inputRef.current.value);
    api.getCards(inputValue)
      .then(res => {
        // console.log('res', res)
        const formattedData = res.results.map((cardData) => {
          return {
            link: cardData.urls.small,
            title: cardData.alt_description,
            subtitle: cardData.user.first_name
          }
        })
        console.log('formattedData', formattedData);
        setcardsData(formattedData);
      })
  }

  const handleInput = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  }

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <input onChange={handleInput} value={inputValue} ref={inputRef} className="Input" type="text" placeholder="Search free high-resolution photos" />
        <button className="Button" >Search</button>
      </form>
      {
        cardsData.map((card, index) => (
          <div className='Card'>
            <img className='Card-image' src={card.link} alt="" />
            <h3 className='Card-title'>{card.title}</h3>
            <p className='Card-subtitle'>{card.subtitle}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
