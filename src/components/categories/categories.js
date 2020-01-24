import React from 'react'

/** Components */
import ListItem from "../category-list-item/category.list-item"
/** Categories Data */
import categories from "../../js/categories"
/** Styles */
import "./categories.scss"

const Categories = () => (
   <div className='categories'>{
      categories.map(({ title, id, imageUrl }) => (
         <ListItem title={title} imageUrl={imageUrl} key={id} />
      ))}
   </div>
)

export default Categories