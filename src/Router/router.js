import React from 'react';

/** Components */
import Header from "../components/layouts/header/header"
import Home from "../pages/home/home"
import Categories from "../pages/categories/categories"
import Category from "../pages/category/category"
import Signin from "../pages/authentication/signin/signin"
import Register from "../pages/authentication/register/register"


/** Router */
import { BrowserRouter, Route, Switch } from "react-router-dom"

const Router = () => {

   return (
      <BrowserRouter>
         <Header />
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/categories' component={Categories} />
            <Route path='/categories/:category' component={Category} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/register' component={Register} />
         </Switch>
      </BrowserRouter >
   );
}

export default Router;
