import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './Login.module.scss';
import logoImg from '../../assets/images/logo.png';
import Button from '../../components/Button/Button';
import { loginUser } from '../../store';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const buttonStyle = {
    backgroundColor: '#57b0bc',
    width: '337px',
    height: '50px',
    fontSize: '22pt',
    borderRadius: '10px',
    marginTop: '17px',
    marginBottom: '17px',
  };

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
    navigate('/senior');
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
          type='text'
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
          type='text'
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
