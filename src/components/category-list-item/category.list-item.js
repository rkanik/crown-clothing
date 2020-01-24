import React from 'react'

/** Styles */
import "./category.list-item.scss"

const ListItem = ({ title, imageUrl }) => (
   <div className="category-list-item elevation-1">
      <div className="background-image"
         style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content elevation-3">
         <h1 className='title'>{title.toUpperCase()}</h1>
         <button className='btn shop-now elevation-1'>SHOW NOW</button>
      </div>
   </div >
)

export default ListItem