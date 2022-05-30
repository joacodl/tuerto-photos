import React from 'react'
import { Link } from 'react-router-dom'

import projectData from '../../../package.json'

import './Footer.css'

const Footer = ({ categories }) => {
  return (
    <div className='footer'>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        {categories.map(category => <li key={category}><Link to={`/category/${category}`}>{category}</Link></li>)}
      </ul>
      <a href='https://github.com/joacodl' target="_blank" rel="noreferrer" className='footer-author'>{projectData.author}</a>
    </div>
  )
}

export default Footer