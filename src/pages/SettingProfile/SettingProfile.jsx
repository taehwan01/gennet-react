import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './SettingProfile.module.scss';
import BackBtn from '../../components/Button/BackBtn';
import Button from '../../components/Button/Button';

const userIntro = `잘 부탁드립니다. 요즘 MZ들은 참 부럽네요. ^^
저도 시대에 뒤떨어지지 않으려면 열심히 배워야겠읍니다.
다들 화이팅! 오늘 하루도 행복만이 가득하길 ~^^
꽃보다 아름다운... 다인씨가 보고싶은 날입니다. *^^*`;

function SettingProfile() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const profileEdit = () => {
    // 수정하기
    navigate('/senior/profile-edit');
  };

  const buttonStyle = {
    backgroundColor: '#57b0bc',
    width: '300px',
    height: '70px',
    borderRadius: '15px',
    marginTop: '40px',
    fontSize: `${user.type === 'SENIOR' ? '25pt' : '25pt'}`,
  };

  const review = 4;
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <BackBtn />
      </div>
      <div className={styles.section2}>
        <div className={styles.circle}> </div>
        <div className={styles.info}>
          <p className={styles.profileTxt}>
            <span className={` ${styles.typeTxt} ${user.type === 'SENIOR' ? 'senior-color' : 'youth-color'}`}>
              시니어
            </span>
            <span className={`${styles.nameTxt} font-bold`}> 김태환 </span>
            <span className={`${styles.nimTxt} font-bold`}>님</span>
          </p>

          <div className={`${styles.reviewDiv}`}>
            <div className={`${styles.tutorEvaluate} font-bold`}>
              {user.type === 'SENIOR' ? (
                ''
              ) : (
                <>
                  <span className={styles.tutorReview}>{`${'★'.repeat(review)}${'☆'.repeat(5 - review)}`}</span>
                  <span className={styles.tutorScore}>4.0점</span>
                </>
              )}
            </div>
          </div>

          <p className={`${styles.dateTxt} ${user.type === 'SENIOR' ? 'font-22pt' : 'font-18pt'}`}>0000년 00월 00일</p>
        </div>

        <div className={styles.introBox}>
          <p className={styles.introTxt}>{userIntro}</p>
        </div>
        <div className={styles.section3}>
          <Button action={profileEdit} buttonStyle={buttonStyle} tag='프로필 수정하기' />
        </div>
      </div>
      <div> </div>
    </div>
  );
}

export default SettingProfile;

// className={`${styles['main-message']} font-bold ${
//   user.type === 'SENIOR' ? 'font-30pt' : 'font-22pt'
// }`}
