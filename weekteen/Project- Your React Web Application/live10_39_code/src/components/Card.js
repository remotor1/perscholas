import React from 'react'

export default function Card({link, title, subtitle}) {
  return (
    <div className="Card">
            <img className="Card-image" src={link}/>
            <h3 className="Card-title">{title}</h3>
            <p className="Card-subtitle">{subtitle}</p>
          </div>
  )
}
