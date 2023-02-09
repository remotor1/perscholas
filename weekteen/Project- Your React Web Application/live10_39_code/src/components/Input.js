import React from 'react'
import './Input.css';

export default function Input({ handleChange, value }) {
  return (
    <input  onChange={handleChange} value={value} placeholder="Search free high-resolution photos" className="Input"/>
  )
}