import styles from './ClassEnd.module.scss';
import Button from '../../components/Button/Button';
import Star from '../../components/Star/Star';

function ClassEnd() {
  const buttonStyle = {
    backgroundColor: '#57b0bc',
    width: '160px',
    height: '70px',
    borderRadius: '15px',
    fontSize: '46px',
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageBanner}>
        <h1 className={`${styles.pageTitle} font-bold`}>수업을 끝내셨군요!</h1>
        <h3 className={styles.pageIntro}>연결된 청년은 어떠셨나요? 별점을 남겨주세요.</h3>
      </div>
      <div className={styles.classInfoBox}>
        <div className={styles.profile} />
        <div className={styles.infoText}>
          <span className={`${styles.tutorName} font-bold`}>천다인</span>
          <span className={styles.classTitle}>버거킹 키오스크 수업</span>
        </div>
      </div>
      <Star />
      <span className={styles.starDescription}>별을 직접 클릭할 수 있어요.</span>
      <Button buttonStyle={buttonStyle} tag='완료' />
    </div>
  );
}

export default ClassEnd;
