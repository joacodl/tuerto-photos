import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

import './HomePageCategories.css'

const HomePageCategories = ({imageInfo, categories, reference}) => {
 
  return (
    <div className='main-page_categories' ref={reference}>
      {categories.map(category => {
        return <Link to={`category/${category}`} key={category} className={`main-page_category-container ${category !== 'C-41' && 'vertical-category'}`}>
          <p>{category.toUpperCase()}</p>
          {/* <p>{imgSelect ? </p> */}
          <img src={imageInfo.filter(info => info.category === category)[0].image} alt={imageInfo[0].title}/>
        </Link>
      })}
        
    </div>
  )
}

export default HomePageCategories