import { useSelector } from 'react-redux';
import styles from './ClassDescription.module.scss';
import Button from '../../components/Button/Button';
import BackBtn from '../../components/Button/BackBtn';
import testIMG from '../../assets/images/banana.png';

function ClassDescription() {
  const user = useSelector((state) => state.user);

  const categoryBtn = {
    backgroundColor: '#57b0bc',
    width: `${user.type === 'SENIOR' ? '120px' : '105px'}`,
    height: `${user.type === 'SENIOR' ? '40px' : '38px'}`,
    borderRadius: '10px',
    fontSize: `${user.type === 'SENIOR' ? '19pt' : '18pt'}`,
  };
  const buttonStyle = {
    backgroundColor: '#57b0bc',
    width: '280px',
    height: '60px',
    borderRadius: '10px',
    fontSize: '25pt',
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
              <div>
                <img className={styles.profile} src={testIMG} alt='Profile IMG' />
              </div>
            </div>
            <div className={styles.topRight}>
              <span className={`${styles.userName} font-bold`}>천다인님</span>
              <div className={styles.tutorEvaluate}>
                {user.type === 'SENIOR' ? (
                  <>
                    <span className={styles.tutorReview}>{`${'★'.repeat(
                      review,
                    )}${'☆'.repeat(5 - review)}`}</span>
                    <span className={styles.tutorScore}>4.0점</span>
                  </>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>

          <div className={styles.class}>
            <img className={styles.classImage} src={testIMG} alt='class-img' />
            <div className={styles.classInfo}>
              <div className={styles.category}>
                <Button buttonStyle={categoryBtn} tag='식사주문' />
              </div>
              <span
                className={`${styles.classTitle} font-bold ${
                  user.type === 'SENIOR' ? 'font-25pt' : 'font-22pt'
                }`}
              >
                버거킹 키오스크 수업
              </span>
              <span
                className={`${styles.classInformation} ${
                  user.type === 'SENIOR' ? 'font-20pt' : 'font-18pt'
                }`}
              >
                프랜차이즈 버거 브랜드인 버거킹의 키오스크를 다뤄봅시다.옵션
                선택부터 결제까지 차근차근 알려드려요.
              </span>
            </div>
            <div className={styles.bottom}>
              {user.type === 'SENIOR' ? (
                <Button buttonStyle={buttonStyle} tag='수업 들으러 가기' />
              ) : (
                <Button buttonStyle={buttonStyle} tag='수업 하러 가기' />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section3} />
    </div>
  );
}

export default ClassDescription;
