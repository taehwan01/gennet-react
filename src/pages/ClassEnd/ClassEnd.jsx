import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './ClassEnd.module.scss';
import Button from '../../components/Button/Button';
import Star from '../../components/Star/Star';
import juniorImg from '../../assets/images/junior.png';

function ClassEnd() {
  const memberId = 123;
  const ratedMemberId = 456;
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const buttonStyle = {
    backgroundColor: '#57b0bc',
    width: '160px',
    height: '70px',
    borderRadius: '15px',
    fontSize: '35pt',
  };

  const handleClick = () => {
    navigate(`/${user.memberType.toLowerCase()}`);
  };
  return (
    <div className={styles.container}>
      <div className={styles.pageBanner}>
        <h1 className={`${styles.pageTitle} font-bold`}>수업을 끝내셨군요!</h1>
        <p className={styles.pageIntro}>연결된 청년은 어떠셨나요?</p>
        <p className={styles.pageIntro} style={{ marginTop: '8px' }}>
          별점을 남겨주세요.
        </p>
      </div>
      <div className={styles.classInfoBox}>
        <div className={styles.profile}>
          <img className={styles.juniorImg} src={juniorImg} alt='junior icon' />
        </div>
        <div className={styles.infoText}>
          <span className={`${styles.tutorName} font-bold`}>천다인</span>
          <span className={styles.classTitle}>버거킹 키오스크 수업</span>
        </div>
      </div>
      <Star memberId={memberId} ratedMemberId={ratedMemberId} />
      <span className={styles.starDescription}>별을 직접 클릭할 수 있어요.</span>
      <Button action={handleClick} buttonStyle={buttonStyle} tag='완료' />
    </div>
  );
}

export default ClassEnd;
