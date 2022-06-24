import React from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet, useNavigate, useLocation  } from "react-router-dom";


const Layout = () => {

  return(
  <div>
    <div className="header">
      <div className="header-right">
        <Link to='/' >Biography</Link>
        <Link to='painting' >The Starry Night</Link>
        <Link to='galery'>Galery</Link>
      </div>
    </div>
    <main>
      <Outlet />
    </main>
  </div>
  )
};


export default Layout;
