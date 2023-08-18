import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useSelector } from 'react-redux';
import styles from './Navigation.module.scss';
import mainLogo from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/search-icon.png';
import alertIcon from '../../assets/images/alert-icon.png';
import incomeAlertIcon from '../../assets/images/income-alert-icon.png';
import ProfileImage from '../ProfileImage/ProfileImage';

let alert = true;

const seniorMessage = (
  <>
    청년이 연결되었습니다.
    <br />
    지금 수업을 시작하세요.
  </>
);
const youthMessage = (
  <>
    시니어가 연결되었습니다.
    <br />
    지금 수업을 시작하세요.
  </>
);

function Navigation() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  // 새로운 알림 내역이 없다면 alertModal은 활성화 되지 않는다.
  const [alertModal, setAlertModal] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleAlertClick = () => {
    setAlertModal(!alertModal);
    alert = false;
  };
  const handleAlertMessageClick = () => {
    navigate('/class-chat/1');
    setAlertModal(!alertModal);
  };

  return (
    <>
      <div className={`${styles['navigation-bar']} `}>
        <div className={styles['navigation-contents']}>
          <Link to={`/${user.memberType.toLowerCase()}`}>
            <img className={styles['main-logo']} src={mainLogo} alt='GENNET logo' />
          </Link>
          <NavLink
            className={`${styles['nav-link']} font-bold ${user.memberType === 'SENIOR' ? 'font-28pt' : 'font-25pt'}`}
            to={`/${user.memberType.toLowerCase()}/my-classes`}
          >
            내 수업
          </NavLink>
          <NavLink
            className={`${styles['nav-link']} font-bold ${user.memberType === 'SENIOR' ? 'font-28pt' : 'font-25pt'}`}
            to={`/${user.memberType.toLowerCase()}/request-class`}
          >
            {`${user.memberType === 'SENIOR' ? '수업 요청하기' : '수업 등록하기'}`}
          </NavLink>
        </div>
        <div className={styles['navigation-contents']}>
          <div className={styles['input-wrapper']}>
            <input
              className={`${styles['input-search']} ${user.memberType === 'SENIOR' ? 'font-22pt' : 'font-18pt'}`}
              type='text'
              placeholder='검색어를 입력해주세요.'
              value={searchKeyword}
              onChange={(e) => {
                setSearchKeyword(e.target.value);
              }}
            />
            <button
              onClick={() => navigate(`/${user.memberType.toLowerCase()}/search/${searchKeyword}`)}
              className={styles['search-button']}
              type='button'
            >
              <img className={styles['search-icon']} src={searchIcon} alt='Search Icon logo' />
            </button>
          </div>
          <button onClick={handleAlertClick} className={styles['alert-button']} type='button'>
            {alert ? (
              <img className={styles['alert-icon']} src={incomeAlertIcon} alt='Alert Icon logo' />
            ) : (
              <img className={styles['alert-icon']} src={alertIcon} alt='Alert Icon logo' />
            )}
          </button>
          {alertModal && (
            <div
              className={`${
                user.memberType === 'SENIOR' ? styles['alert-container-senior'] : styles['alert-container-youth']
              }`}
            >
              <div className={styles['alert-message-box']}>
                <button
                  type='button'
                  style={{
                    padding: '0',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                  }}
                  className='click-alert-range'
                  onClick={handleAlertMessageClick}
                >
                  <span
                    style={{ lineHeight: '40px' }}
                    className={`${styles['alert-message']} font-bold ${
                      user.memberType === 'SENIOR' ? 'font-25pt' : 'font-20pt'
                    }`}
                  >
                    {user.memberType === 'SENIOR' ? seniorMessage : youthMessage}
                    {/* 청년이 연결되었습니다. <br />
                    지금 수업을 시작하세요. */}
                  </span>
                </button>
              </div>
            </div>
          )}
          {user ? (
            <ProfileImage />
          ) : (
            'no user'
            // <NavLink className={styles['profile-link']} to='/senior/profile' />
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
