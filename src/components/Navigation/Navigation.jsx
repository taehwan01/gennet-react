import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

import './Navigation.css';
import mainLogo from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/search-icon.png';
import alertIcon from '../../assets/images/alert-icon.png';

function Navigation() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState('');

  return (
    <div className='navigation-bar'>
      <div className='navigation-contents'>
        <Link to='/senior'>
          <img className='main-logo' src={mainLogo} alt='' />
        </Link>
        <NavLink className='nav-link font-bold' to='/senior/my-classes'>
          내 수업
        </NavLink>
        <NavLink className='nav-link font-bold' to='/senior/request-class'>
          수업 요청하기
        </NavLink>
      </div>
      <div className='navigation-contents'>
        <div className='input-wrapper'>
          <input
            className='input-search font-light'
            type='text'
            placeholder='검색어를 입력해주세요.'
          />
          <button className='search-button' type='button'>
            <img
              className='search-icon'
              src={searchIcon}
              alt='Search Icon logo'
            />
          </button>
        </div>
        <button className='alert-button' type='button'>
          <img className='alert-icon' src={alertIcon} alt='Alert Icon logo' />
        </button>
        {user ? (
          'profile'
        ) : (
          <button className='profile-button' type='button'>
            {/* none */}
          </button>
        )}
      </div>
    </div>
  );
}

export default Navigation;
