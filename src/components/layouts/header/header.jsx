
import React, { useState } from 'react';
import "./header.scss"
import { Link } from "react-router-dom"
import { Button } from '@material-ui/core';

const Header = ({ currentUser = null }) => {

   const [active, setActive] = useState("Home")

   const [navItems] = useState([
      { name: "Home", route: "/" },
      { name: 'Categories', route: '/categories' },
      { name: 'About', route: '/about' },
   ])

   const handleNavItemClick = item => { setActive(item.name) }

   return (
      <div className='header elevation-1'>
         <div className="logo-container">
            <i className="fab fa-studiovinari fa-2x" style={{ color: "#212121" }}></i>
         </div>
         <div className="options">

            {navItems.map((item, index) => (
               <Link
                  onClick={() => handleNavItemClick(item)}
                  className={`${active === item.name ? 'active' : ''} option`}
                  to={item.route}
                  key={index}>
                  {item.name}
               </Link>
            ))}

            <Link onClick={() => handleNavItemClick("")} to='/signin' className='mr-4'>
               {currentUser
                  ? <Button

                     variant='outlined'
                     size='small'
                     color='primary'>Signout
                  </Button>
                  : <Button
                     variant='outlined'
                     size='small'
                     color='primary'>Signin
                  </Button>
               }
            </Link>

            {!currentUser &&
               <Link onClick={() => handleNavItemClick("")} to='/register'>
                  <Button
                     variant='outlined'
                     size='small'
                     color='secondary'>Register
                  </Button>
               </Link>
            }
         </div>
      </div>
   );
}

export default Header;
