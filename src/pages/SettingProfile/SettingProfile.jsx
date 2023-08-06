import styles from './SettingProfile.module.scss';
import BackBtn from '../../components/Button/BackBtn';
import Button from '../../components/Button/Button';

function SettingProfile() {
  const buttonStyle = {
    backgroundColor: '#57b0bc',
    width: '300px',
    height: '70px',
    borderRadius: '15px',
    fontSize: '40px',
    marginTop: '30px',
  };

  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <BackBtn />
      </div>
      <div className={styles.section2}>
        <div className={styles.circle}> </div>
        <div className={styles.info}>
          <p className={styles.profileTxt}>
            <span className={styles.seniorTxt}>시니어</span>
            <span className={`${styles.nameTxt} font-bold`}> 김태환 </span>
            <span className={`${styles.nimTxt} font-bold`}>님</span>
          </p>
          <p className={styles.dateTxt}>0000년 00월 00일</p>
        </div>
        <div className={styles.introBox}>
          <p className={styles.introTxt}>
            잘 부탁드립니다. 요즘 MZ들은 참 부럽네요. ^^
            <br />
            저도 시대에 뒤떨어지지 않으려면 열심히 배워야겠읍니다.
            <br />
            다들 화이팅! 오늘 하루도 행복만이 가득하길 ~^^
            <br />
            꽃보다 아름다운... 다인씨가 보고싶은 날입니다. *^^*
          </p>
        </div>
        <div className={styles.section3}>
          <Button buttonStyle={buttonStyle} tag='프로필 수정하기' />
        </div>
      </div>
      <div> </div>
    </div>
  );
}

export default SettingProfile;
