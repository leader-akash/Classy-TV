
import React from 'react';
import "./Badge.css";
import { Link, useLocation } from 'react-router-dom';

const Badge = () => {

  const location = useLocation();

  return (
    <div className='badge-container'>

        {/* <Link className='badge-hover' to="/all"><div className='badge-items'>All</div></Link> */}
        <div className='badge-items'>All</div>
        <Link className='badge-hover' to="/music"><div className='badge-items'>Music</div></Link>
        <Link className='badge-hover' to="/tech"><div className='badge-items'>Tech</div></Link>
        <Link className='badge-hover' to="/world"><div className='badge-items'>World</div></Link>

    </div>
  )
}

export default Badge;