import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './SettingProfile.css';

function SettingProfile() {
  return (
    <div className='container'>
      <div className='section1'>
        <button type='button' className='back-bt'>
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#ffffff' }} />
        </button>
      </div>
      <div className='section2'>
        <div className='circle'> </div>
        <div className='info'>
          <p className='profile-txt'>
            <span className='senior-txt'>시니어</span>
            <span className='name-txt'>김태환</span>
            <span className='nim-txt'>님</span>
          </p>
          <p className='date-txt'>0000년 00월 00일</p>
        </div>
        <div className='intro-box'>
          <p className='intro-txt'>
            잘 부탁드립니다. 요즘 MZ들은 참 부럽네요. ^^
            <br />
            저도 시대에 뒤떨어지지 않으려면 열심히 배워야겠읍니다.
            <br />
            다들 화이팅! 오늘 하루도 행복만이 가득하길 ~^^
            <br />
            꽃보다 아름다운... 다인씨가 보고싶은 날입니다. *^^*
          </p>
        </div>
        <div className='section3'>
          <button type='button' className='profile-edit-bt'>
            프로필 수정하기
          </button>
        </div>
      </div>
      <div> </div>
    </div>
  );
}

export default SettingProfile;
