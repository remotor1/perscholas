import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import './Button.css';
import './Input.css';
import api from './api';
import Header from './Header';
import './Cards.css'
import './Card.css'

function App() {
  let [inputValue, setInputValue] = useState('');
  let [cardsData, setcardsData] = useState([]);
  const inputRef = useRef(false);

  useEffect(() => {
    console.log('chenched', inputValue);
  }, [inputValue])

  const handleSubmit = (e) => {
    e.preventDefault();
    api.getCards(inputValue)
      .then(res => {
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
    handleSubmit(e);
  }

  return (
    <div className="App">
      <Header />
      <form className='App__form' onSubmit={handleSubmit}>
        <input onChange={handleInput} value={inputValue} ref={inputRef} className="Input" type="text" placeholder="Search free high-resolution photos" />
        <button className="Button" >Search</button>
      </form>
      <div className='Cards'>
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
    </div>
  );
}

export default App;
