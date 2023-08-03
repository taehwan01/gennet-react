import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

import styles from './Navigation.module.scss';
import mainLogo from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/search-icon.png';
import alertIcon from '../../assets/images/alert-icon.png';

function Navigation() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState('');

  return (
    <div className={styles['navigation-bar']}>
      <div className={styles['navigation-contents']}>
        <Link to='/senior'>
          <img
            className={styles['main-logo']}
            src={mainLogo}
            alt='GENNET logo'
          />
        </Link>
        <NavLink
          className={`${styles['nav-link']} font-bold`}
          to='/senior/my-classes'
        >
          내 수업
        </NavLink>
        <NavLink
          className={`${styles['nav-link']} font-bold`}
          to='/senior/request-class'
        >
          수업 요청하기
        </NavLink>
      </div>
      <div className={styles['navigation-contents']}>
        <div className={styles['input-wrapper']}>
          <input
            className={styles['input-search']}
            type='text'
            placeholder='검색어를 입력해주세요.'
          />
          <button className={styles['search-button']} type='button'>
            <img
              className={styles['search-icon']}
              src={searchIcon}
              alt='Search Icon logo'
            />
          </button>
        </div>
        <button className={styles['alert-button']} type='button'>
          <img
            className={styles['alert-icon']}
            src={alertIcon}
            alt='Alert Icon logo'
          />
        </button>
        {user ? (
          'profile'
        ) : (
          <NavLink className={styles['profile-link']} to='/senior/profile' />
          // <button className='profile-button' type='button'>
          //   {/* none */}
          // </button>
        )}
      </div>
    </div>
  );
}

export default Navigation;
