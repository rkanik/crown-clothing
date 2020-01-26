import React from "react"
import "./product.scss"

/** Material Components */
//import Fab from "@material-ui/core/Fab"
//import IconButton from "@material-ui/core/IconButton"
//import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
//import { Button, Fab } from "@material-ui/core"

const Product = ({ product, width }) => (
   <div className='product elevation-1' style={{ width: width }}>
      <div className='product-img' style={{ backgroundImage: `url(${product.imageUrl})` }}></div>
      <div className='pos-abs pa-3 product-content'>
         <h3 className='product-name'>{product.name}</h3>
         <h3 className='product-price'>
            <span>$</span>
            <span>{product.price}</span>
         </h3>
         <button className='product-add-cart pos-abs bottom-1 right-2'>
            <i className=" fal fa-shopping-cart"></i>
         </button>
         {/* <Button>Button</Button>
         <Fab size='small' color="secondary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
         </Fab> */}
      </div>
   </div>
)

export default Product