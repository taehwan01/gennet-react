import styles from './ClassDescription.module.scss';
import Button from '../../components/Button/Button';
import BackBtn from '../../components/Button/BackBtn';
import testIMG from '../../assets/images/banana.png';

function ClassDescription() {
  const categoryBtn = {
    backgroundColor: '#57b0bc',
    width: '120px',
    height: '40px',
    borderRadius: '15px',
    fontSize: '20px',
  };
  const buttonStyle = {
    backgroundColor: '#57b0bc',
    width: '250px',
    height: '50px',
    borderRadius: '15px',
    fontSize: '30px',
  };
  const review = 4;
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <BackBtn />
      </div>
      <div className={styles.section2}>
        <div className={styles.classBox}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <div className={styles.profileImage} />
            </div>
            <div className={styles.topRight}>
              <span className={`${styles.userName} font-bold`}>천다인님</span>
              <div className={styles.tutorEvaluate}>
                <span className={styles.tutorReview}>{`${'★'.repeat(review)}${'☆'.repeat(5 - review)}`}</span>
                <span className={styles.tutorScore}>4.0점</span>
              </div>
            </div>
          </div>
          <div className={styles.class}>
            <img className={styles.classImage} src={testIMG} alt='class-img' />
            <div className={styles.classInfo}>
              <div className={styles.category}>
                <Button buttonStyle={categoryBtn} tag='식사주문' />
              </div>
              <span className={`${styles.classTitle} font-bold`}>버거킹 키오스크 수업</span>
              <span className={styles.classInformation}>
                프랜차이즈 버거 브랜드인 버거킹의 키오스크를 다뤄봅시다. 옵션 선택부터 결제까지 차근차근 알려드려요.
              </span>
            </div>
            <div className={styles.bottom}>
              <Button buttonStyle={buttonStyle} tag='수업 들으러가기' />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section3} />
    </div>
  );
}

export default ClassDescription;
