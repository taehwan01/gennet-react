import styles from './Register.module.scss';
import Button from '../../components/Button/Button';
import logoImg from '../../assets/images/logo.png';
import seniorImg from '../../assets/images/senior.png';
import juniorImg from '../../assets/images/junior.png';

function Register() {
  const duplicationCheckBtn = {
    backgroundColor: '#57b0bc',
    width: '116px',
    height: '40px',
    fontSize: '24px',
    borderRadius: '15px',
  };
  const nextBtn = {
    backgroundColor: '#57b0bc',
    width: '163px',
    height: '70px',
    fontSize: '40px',
    borderRadius: '15px',
    marginTop: '77px',
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logoImg} alt='logo icon' />
      <div className={styles.selectUser}>
        <div className={styles.senior}>
          <img className={styles.seniorImg} src={seniorImg} alt='senior icon' />
          <span className={`${styles.userTxt} font-bold`}>시니어</span>
          <span className={styles.userExplainTxt}>(배우는 사람)</span>
        </div>
        <div className={styles.junior}>
          <img className={styles.juniorImg} src={juniorImg} alt='junior icon' />
          <span className={`${styles.userTxt} font-bold`}>주니어</span>
          <span className={styles.userExplainTxt}>(가르치는 사람)</span>
        </div>
      </div>

      <form>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
            <span>아이디</span>
          </div>
          <div className={styles.emailForm}>
            <input type='text' className={styles.nameBox} placeholder='이메일 입력' />
            <div className={styles.duplicationCheckBtn}>
              <Button buttonStyle={duplicationCheckBtn} tag='중복확인' />
            </div>
          </div>
        </div>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
            <span>비밀번호</span>
          </div>
          <input type='text' className={styles.nameBox} placeholder='8자이상 입력' />
        </div>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
            <span>비밀번호 확인</span>
          </div>
          <input type='text' className={styles.nameBox} placeholder=' ' />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button buttonStyle={nextBtn} tag='다음' />
        </div>
      </form>
    </div>
  );
}
export default Register;
