// Badge.js
import React from 'react';
import './Badge.css';
import { Link, useLocation } from 'react-router-dom';

const NewBadge = () => {
  const location = useLocation();

  const isActiveLink = (pathname) => {
    return location.pathname === pathname;
  };

  const isActiveDiv = () => {
    return location.pathname === '/all';
  };

  return (
    <div className='badge-container'>
    <div
        className={`badge-hover ${isActiveDiv() ? 'active-text' : ''}`}
        onClick={() => window.location.href = '/all'}
      >
        <div className={`badge-items ${isActiveDiv() ? 'active-text' : ''}`}>
          All
        </div>
      </div>

      {/* <Link
        className="badge-hover"
        to='/'
      >
        <div className="badge-items badge-all">
          All
        </div>
      </Link> */}

      <Link
        className={`badge-hover ${isActiveLink('/music') ? 'active' : ''}`}
        to='/music'
      >
        <div className={`badge-items ${isActiveLink('/music') ? 'active-text' : ''}`}>
          Music
        </div>
      </Link>
      <Link
        className={`badge-hover ${isActiveLink('/tech') ? 'active' : ''}`}
        to='/tech'
      >
        <div className={`badge-items ${isActiveLink('/tech') ? 'active-text' : ''}`}>
          Tech
        </div>
      </Link>
      <Link
        className={`badge-hover ${isActiveLink('/world') ? 'active' : ''}`}
        to='/world'
      >
        <div className={`badge-items ${isActiveLink('/world') ? 'active-text' : ''}`}>
          World
        </div>
      </Link>
      
    </div>
  );
};

export default NewBadge;


// import React from 'react';
// import "./Badge.css";
// import { Link, useLocation } from 'react-router-dom';

// const Badge = () => {

//   const location = useLocation();

//   return (
//     <div className='badge-container'>

//         {/* <Link className='badge-hover' to="/all"><div className='badge-items'>All</div></Link> */}
//         <div className='badge-items'>All</div>
//         <Link className='badge-hover' to="/music"><div className='badge-items'>Music</div></Link>
//         <Link className='badge-hover' to="/tech"><div className='badge-items'>Tech</div></Link>
//         <Link className='badge-hover' to="/world"><div className='badge-items'>World</div></Link>

//     </div>
//   )
// }

// export default Badge;