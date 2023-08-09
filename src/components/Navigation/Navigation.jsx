import { Link, NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';

import styles from './Navigation.module.scss';
import mainLogo from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/search-icon.png';
import alertIcon from '../../assets/images/alert-icon.png';
import incomeAlertIcon from '../../assets/images/income-alert-icon.png';
import ProfileImage from '../ProfileImage/ProfileImage';

let alert = true;

function Navigation() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState('');
  const [alertModal, setAlertModal] = useState(false);

  const handleAlertClick = () => {
    setAlertModal(!alertModal);
    alert = false;
  };

  return (
    <>
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
          <button
            onClick={handleAlertClick}
            className={styles['alert-button']}
            type='button'
          >
            {alert ? (
              <img
                className={styles['alert-icon']}
                src={incomeAlertIcon}
                alt='Alert Icon logo'
              />
            ) : (
              <img
                className={styles['alert-icon']}
                src={alertIcon}
                alt='Alert Icon logo'
              />
            )}
          </button>
          {alertModal ? (
            <div className={styles['alert-container']}>
              <div className={styles['alert-message-box']}>
                <span className={`${styles['alert-message']} font-bold`}>
                  청년이 연결되었습니다. <br />
                  지금 수업을 시작하세요.
                </span>
                {/* <span className={styles['alert-message']}>2. hello</span>
                <span className={styles['alert-message']}>3. hello</span> */}
              </div>
            </div>
          ) : (
            ''
          )}
          {user ? (
            'profile'
          ) : (
            <ProfileImage />
            // <NavLink className={styles['profile-link']} to='/senior/profile' />
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
