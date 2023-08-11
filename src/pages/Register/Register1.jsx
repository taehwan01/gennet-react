import { useNavigate } from 'react-router-dom';
import styles from './Register1.module.scss';
import Button from '../../components/Button/Button';
import logoImg from '../../assets/images/logo.png';
import seniorImg from '../../assets/images/senior.png';
import juniorImg from '../../assets/images/junior.png';

function Register1() {
  // state = {
  //   password: '',
  //   confirmPassword: '',
  // };

  // handleOnPasswordInput(passwordInput) {
  //   this.setState({password: passwordInput});
  // }
  // handleOnConfirmPasswordInput(confirmPasswordInput) {
  //   this.setState({confirmPassword: confirmPasswordInput});
  // }
  const navigate = useNavigate();

  const duplicationCheckBtn = {
    backgroundColor: '#57b0bc',
    width: '116px',
    height: '45px',
    fontSize: '18pt',
    borderRadius: '15px',
  };
  const nextBtn = {
    backgroundColor: '#57b0bc',
    width: '163px',
    height: '70px',
    fontSize: '30pt',
    borderRadius: '15px',
    margin: '10px 0',
    // marginTop: '2rem',
    // marginBottom: '132px',
  };

  const handleNextStep = () => {
    navigate('/register/2');
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
            <input
              type='text'
              className={styles.emailBox}
              placeholder='이메일 입력'
            />
            <div className={styles.duplicationCheckBtn}>
              <Button buttonStyle={duplicationCheckBtn} tag='중복확인' />
            </div>
          </div>
        </div>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
            <span>비밀번호</span>
          </div>
          <input
            type='text'
            className={styles.passwordBox}
            placeholder='8자이상 입력'
          />
          {/* <input
            type='password'
            className={styles.passwordBox}
            id='passwordInput'
            onChange={(e) => this.handleOnPasswordInput(e.target.value)}
            placeholder='8자이상 입력'
          /> */}
        </div>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
            <span>비밀번호 확인</span>
          </div>
          {/* <input
            type='password'
            className={styles.passwordBox}
            id='confirmPasswordInput'
            onChange={(e) => this.handleOnConfirmPasswordInput(e.target.value)}
            placeholder=' '
          />
          {this.renderFeedbackMessage()} */}
          <input type='text' className={styles.passwordBox} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button action={handleNextStep} buttonStyle={nextBtn} tag='다음' />
        </div>
      </form>
    </div>
  );
}
export default Register1;
