import React from 'react';

/** Components */
import Home from "../pages/home/home"
import Categories from "../pages/categories/categories"
import Category from "../pages/category/category"

/** Router */
import { BrowserRouter, Route, Switch } from "react-router-dom"

const Router = () => {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/categories' component={Categories} />
            <Route path='/categories/:category' component={Category} />
         </Switch>
      </BrowserRouter >
   );
}

export default Router;
