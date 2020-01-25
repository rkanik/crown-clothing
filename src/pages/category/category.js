import React from 'react'

import Product from "../../components/product/product"
import CategoryItems from "../../js/category-items"

import "./category.scss";

const Category = props => {
   let category = CategoryItems.find(i => (
      i.title.toLocaleLowerCase() === props.match.params.category.toLocaleLowerCase()
   ))
   return (
      <div className='category pa-10 d-flex flex-wrap'>
         <div className={`header bg-${category.color} pos-rel mb-4`}>
            <div className='pos-abs to-center'>
               <h1>{props.match.params.category.toUpperCase()}</h1>
            </div>
         </div>
         {
            category.items.map(product => (
               <Product
                  key={product.id}
                  product={product}
                  width={'32.05%'}
               />
            ))}
      </div>
   )
}



export default Category