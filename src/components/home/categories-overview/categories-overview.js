import React from 'react'
import { Link } from 'react-router-dom'
/** Categories Data */
import categories from "../../../js/categories"
/** Styles */
import "./categories-overview.scss"

const CategoriesOverview = () => (
   <div className='categories-overview'>
      <div className='d-flex px-2'>
         <h1 className='label mw-max'>Categories Overview</h1>
         <div className="spacer"></div>
         <Link to="/categories" className='pt-3'>
            <button className='btn more text-white elevation-1'>More</button>
         </Link>
      </div>
      <div className='categories'>{
         categories.map(({ title, id, imageUrl }) => (
            <div className="category-list-item elevation-1" key={id}>
               <div className="background-image"
                  style={{ backgroundImage: `url(${imageUrl})` }}
               ></div>
               <div className="content elevation-3">
                  <h1 className='title'>{title.toUpperCase()}</h1>
                  <Link to={`/categories/${title}`}>
                     <button className='btn shop-now elevation-1'>SHOW NOW</button>
                  </Link>
               </div>
            </div >
         ))}
      </div>
   </div>
)

export default CategoriesOverview