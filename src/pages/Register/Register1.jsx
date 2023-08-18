import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store';
import styles from './Register1.module.scss';
import Button from '../../components/Button/Button';
import logoImg from '../../assets/images/logo.png';
import seniorImg from '../../assets/images/senior.png';
import juniorImg from '../../assets/images/junior.png';

function Register1() {
  const dispatch = useDispatch();
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
  };

  const [email, setEmail] = useState('');
  const [emailValidation, setEmailValidation] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmValidation, setPasswordConfirmValidation] = useState(false);

  const [emailDupliError, setEmailDupliError] = useState('');

  const handleEmailCheck = async () => {
    try {
      const response = await axios.post('http://localhost:8080/members/check-email', { email });
      setEmailDupliError('');
      if (response.status === 200) alert('사용 가능한 메일입니다.'); // TODO: 나중에 투명 모달창 등으로 바꾸기
    } catch (error) {
      const errorCode = error.response.status;
      if (errorCode === 409) {
        setEmailDupliError('이메일이 중복되었습니다.');
      }
    }
  };

  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
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
    const passwordRegExp = /^(?=.*[\W_])(.{8,})$/;

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

  const isAllValid = emailValidation && passwordValidation && passwordConfirmValidation;

  const handleNextStep = () => {
    if (isAllValid && emailDupliError === '') {
      // eslint-disable-next-line no-use-before-define
      dispatch(loginUser({ email, password, passwordConfirm, memberType: selectedUser }));
      navigate('/register/2');
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
              <Button action={handleEmailCheck} buttonStyle={duplicationCheckBtn} tag='중복확인' />
            </div>
            <span className={styles.emailErrorMessage}>{emailDupliError}</span>
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
            {password && !passwordValidation ? '비밀번호 특수문자 포함 8자 이상' : ''}
          </span>
        </div>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
            <span>비밀번호 확인</span>
          </div>
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
          <Button
            action={handleNextStep}
            buttonStyle={nextBtn}
            tag='다음'
            disabled={!isAllValid || !emailValidation || emailDupliError}
          />
        </div>
      </form>
    </div>
  );
}
export default Register1;
