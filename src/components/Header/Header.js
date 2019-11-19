import React from 'react';

import Searchbox from './Searchbox';

const Header = () => {
  return(
    <div className='header'>
      <nav className='header-nav'>

        <a href='/' className='brand-logo'><h3>MovieX</h3></a>

        <Searchbox />
      </nav>
    </div>
  )
}

export default Header;