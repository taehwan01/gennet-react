import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import styles from './Login.module.scss';
import logoImg from '../../assets/images/logo.png';
import Button from '../../components/Button/Button';
import { loginUser, setTokens } from '../../store';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        email,
        password,
      });
      const accessToken = response.headers.authorization;
      const refreshToken = response.headers.refresh;

      dispatch(loginUser({ email, password }));
      dispatch(setTokens({ accessToken, refreshToken }));

      navigate(`/${user.type.toLowerCase()}`);
    } catch (error) {
      console.error('Login qwefqerf error:', error);
    }
  };

  // const handleEmailCheck = () => {
  //   axios
  //     .post('http://localhost:8080/members/check-email', { email }) // js문법 떄문에 축약
  //     .then((response) => {
  //       console.log(response);
  //       setEmailDupliError('');
  //     })
  //     .catch((error) => {
  //       // console.log(error.response.status);
  //       const errorCode = error.response.status;
  //       if (errorCode === 409) {
  //         console.log(emailDupliError);
  //         setEmailDupliError('이메일이 중복되었습니다.');
  //       }
  //     });
  // };

  const buttonStyle = {
    backgroundColor: '#57b0bc',
    border: '2px solid #57b0bc',
    width: '365px',
    height: '56px',
    fontSize: '22pt',
    borderRadius: '10px',
    marginTop: '17px',
    marginBottom: '17px',
    marginLeft: '20px',
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logoImg} alt='logo icon' />
      <span className={`${styles.loginTxt} font-bold`}>로그인</span>

      <div className={styles.formDiv}>
        <div className={styles.formTag}>
          <span className={`${styles.idTxt} font-bold`}>아이디</span>
        </div>
        <input
          type='email'
          className={styles.idBox}
          placeholder='아이디를 입력해주세요.'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className={styles.formDiv}>
        <div className={styles.formTag}>
          <span className={`${styles.passwordTxt} font-bold`}>비밀번호</span>
        </div>
        <input
          type='password'
          className={styles.passwordBox}
          placeholder='비밀번호를 입력해주세요.'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <Button action={handleLogin} buttonStyle={buttonStyle} tag='로그인' />
      <Link to='/register'>
        <span>계정이 없으신가요?</span>
      </Link>
    </div>
  );
}

export default Login;
