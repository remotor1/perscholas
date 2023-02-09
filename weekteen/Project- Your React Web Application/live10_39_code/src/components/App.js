import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import './Button.css';

import Input from './Input'
import Button from './Button'
import Form from './Form'
import Card from './Card'

import api from '../api/api'

function App() {
  let [inputValue, setInputValue] = useState('text')
  let [cardsData, setCardsData] = useState([])
  let [isModalOpen, setIsModalOpen] = useState(false)
  let [isLoading, setIsLoading] = useState(false)
  
  const inputRef = useRef(false)

  const handleSubmit = (e) => { 
    e.preventDefault();
    setIsLoading(true)

    api.getCards(inputValue)
      .then(res => {
        const formattedData = res.results.map((cardData) => {
          return {
            link: cardData.urls.small,
            title: cardData.alt_description,
            subtitle: cardData.user.first_name,
            id: cardData.id
          }
        })
        setCardsData(formattedData)
        setIsLoading(false)
      })
  }

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }


  const handleOpenModalClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModalClick = () => {
    console.log('!!!')
  }


  return (
    <div className="App">
      <Form handleSubmit={handleSubmit}>
        <Input handleChange={handleInput} value={inputValue}/>
          <Button text={'Search'}/>
      </Form>
      {
        isLoading && <span>loading....</span>
      }
      {
        cardsData.map((card) => (
          <Card {...card} key={card.id}/>
        ))
      }      
      
      <Modal isOpen={isModalOpen} handleClick={handleCloseModalClick}> modal 2</Modal>
    </div>
  );
}

function Modal({ handleClick,  isOpen, children }) { 
  return (
    <div className={`modal modal_open ${isOpen ? 'modal_open' : ''}`}>
      {children }
      <Button handleClick={handleClick}/>
    </div>
  )
}



export default App;

