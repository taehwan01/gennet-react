import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './Register1.module.scss';
import Button from '../../components/Button/Button';
import logoImg from '../../assets/images/logo.png';
import seniorImg from '../../assets/images/senior.png';
import juniorImg from '../../assets/images/junior.png';

function Register1() {
  // const [selectedInterest, setSelectedInterest] = useState('식사주문');

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

  const [selectedUser, setSelectedUser] = useState('SENIOR');

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

  const [email, setEmail] = useState('');
  const [emailValidation, setEmailValidation] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmValidation, setPasswordConfirmValidation] = useState(false);

  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    // email 주소 형식을 검사
    const emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(emailInput)) {
      setEmailValidation(false);
    } else {
      setEmailValidation(true);
    }
  };

  const handlePasswordChange = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    // 영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~32자
    const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,32}$/;

    if (!passwordRegExp.test(passwordInput)) {
      setPasswordValidation(false);
    } else {
      setPasswordValidation(true);
    }
  };

  const handlePasswordConfirmChange = (e) => {
    const passwordConfirmInput = e.target.value;
    setPasswordConfirm(passwordConfirmInput);
    if (password !== passwordConfirmInput) {
      setPasswordConfirmValidation(false);
    } else {
      setPasswordConfirmValidation(true);
    }
  };
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logoImg} alt='logo icon' />
      <div className={styles.selectUser}>
        <button
          type='button'
          className={`${styles.senior} ${selectedUser === 'SENIOR' ? styles.seniorBorder : ''}`}
          onClick={() => setSelectedUser('SENIOR')}
        >
          <img className={styles.seniorImg} src={seniorImg} alt='senior icon' />
          <span className={`${styles.userTxt} font-bold`}>시니어</span>
          <span className={styles.userExplainTxt}>(배우는 사람)</span>
        </button>
        <button
          type='button'
          className={`${styles.junior} ${selectedUser === 'YOUTH' ? styles.juniorBorder : ''}`}
          onClick={() => setSelectedUser('YOUTH')}
        >
          <img className={styles.juniorImg} src={juniorImg} alt='junior icon' />
          <span className={`${styles.userTxt} font-bold`}>청년</span>
          <span className={styles.userExplainTxt}>(가르치는 사람)</span>
        </button>
      </div>

      <form>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
            <span>아이디</span>
          </div>
          <div className={styles.emailForm}>
            <input
              type='email'
              className={styles.emailBox}
              placeholder='이메일 입력'
              value={email}
              onChange={handleEmailChange}
            />
            <span className={styles.emailErrorMessage}>
              {email && !emailValidation ? '이메일 주소 형식에 맞춰 입력해주세요' : ''}
            </span>
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
            type='password'
            className={styles.passwordBox}
            placeholder='8자이상 입력'
            value={password}
            onChange={handlePasswordChange}
          />
          <span className={styles.passwordErrorMessage}>
            {password && !passwordValidation ? '영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~32자' : ''}
          </span>
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
          <input
            type='password'
            className={styles.passwordBox}
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
          />
          <span className={styles.passwordConfirmErrorMessage}>
            {passwordConfirm && !passwordConfirmValidation ? '비밀번호가 일치하지 않습니다.' : ''}
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button action={handleNextStep} buttonStyle={nextBtn} tag='다음' />
        </div>
      </form>
    </div>
  );
}
export default Register1;
