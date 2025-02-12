import React, {useState} from 'react'
import './Navbar.css'
import { FiShoppingBag } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className='main-nav'>
        
        <div className='logo'>
          <h2>Techonicle </h2>
        </div>

        <div className={showMediaIcons ? 'menu mobile-menu' : 'menu'}>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/feed'>Feed Page</a>
            </li>
            <li>
              <a href='/blog'>Blog Page</a>
            </li>
            <li>
              <a href='/create'>Create Blog</a>
            </li>
          </ul>
        </div>

        <div className='links'>
          <ul className='links-desktop'>
          <li><a href='/nav'><FiShoppingBag className='cart'/></a></li>
          <li><a href='/nav'><CgProfile className='profile'/></a></li>
          </ul>

          {/* Hamburger */}
      <div className='hamburger-menu'>
        <p onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <GiHamburgerMenu className='hamburgermenu'/>
        </p>
      </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar