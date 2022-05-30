import React from 'react'
import { Link } from 'react-router-dom'

import './HomePageCategories.css'

const HomePageCategories = ({images, categories, reference}) => {
 
  return (
    <div className='main-page_categories' ref={reference}>
    {/* {categories.map(category => images[category].map(img => <img src={img} alt="asdasd" />))} */}
      {categories.map(category => {
        return <Link to={`category/${category}`} key={category} className={`main-page_category-container ${category !== 'C-41' && 'vertical-category'}`}>
          <p>{category}</p>
          {/* <p>{imgSelect ? </p> */}
          <img src={images[category][0]} alt={`${category} cover`}/>
        </Link>
      })}
        
    </div>
  )
}

export default HomePageCategories