import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import './Button.css';
import './Input.css';
import api from './api';
import Header from './Header';
import './Cards.css'
import './Card.css'

let Input = {
  boxSizing: 'border-box',
  paddingLeft: '10px',
  color: '#b6b6b6',
  width: '100%',
  maxWidth: '684px',
  height: '54px',
  fontSize: '14px',
  border: '1px solid #c4c4c4',
  borderRadius: '5px',
  margin: '10px',
};

function App() {
  let [inputValue, setInputValue] = useState('');
  let [cardsData, setcardsData] = useState([]);
  const inputRef = useRef(false);

  useEffect(() => {
    console.log('chenched', inputValue, inputValue.length);
    Input = {
      boxShadow: `0 0 ${inputValue.length}px ${inputValue.length}px	rgba(82, 153, 224, 0.5)`,
      boxSizing: 'border-box',
      paddingLeft: '10px',
      width: '100%',
      maxWidth: '684px',
      height: '54px',
      fontSize: '14px',
      border: `1px solid #48abe0`,
      borderRadius: '5px',
      margin: '10px',
      outline: '0',
    }
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
      }).catch(() => { })
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
        <input className='Input' style={Input} maxLength="20" onChange={handleInput} value={inputValue} ref={inputRef} type="text" placeholder="Search free high-resolution photos" />
        <button className="Button" >Search</button>
      </form>
      <div className='Cards'>
        {
          cardsData.map((card, index) => (
            <div className='Card' key={index}>
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
