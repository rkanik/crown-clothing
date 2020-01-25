import React from 'react'
import { Link } from "react-router-dom"
/** Categories data */
import CategoryItems from "../../js/category-items"
/** Components */
import Product from "../../components/product/product"
/** Style */
import "./categories.scss"

const Categories = () => {
   return (
      <div className='pa-10'>{
         CategoryItems.map(category => {
            let items = category.items.slice(0, 3)
            return (
               <div className='category-items d-flex' key={category.id}>
                  <div className={`box category-box elevation-1 bg-${category.color}`}>
                     <div className='pos-abs text-center to-center'>
                        <h3 className='cat-name mb-3'>{category.title}</h3>
                        <Link to={`/categories/${category.routeName}`} >
                           <button className='btn'>more</button>
                        </Link>
                     </div>
                  </div>
                  {
                     items.map(product => <Product key={product.id} product={product} width={'100%'} />)
                  }
               </div>
            )
         })}
      </div>
   )
}

export default Categories
