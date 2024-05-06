import React from 'react';
import { Link} from 'react-router-dom';

function Navigation() {
  return (
    <nav className="nav">
      <Link className='link' to="/">Home</Link>
      <Link className='link' to="/software">Software</Link>
      <Link className='link' to="/games">Games</Link>
    </nav>  
  )
}

export default Navigation