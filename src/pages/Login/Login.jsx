import { Link } from 'react-router-dom';
import styles from './Login.module.scss';
import logoImg from '../../assets/images/logo.png';
import Button from '../../components/Button/Button';

function Login() {
  const buttonStyle = {
    backgroundColor: '#57b0bc',
    width: '337px',
    height: '50px',
    fontSize: '29px',
    borderRadius: '10px',
    marginTop: '17px',
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
        />
      </div>
      <Button buttonStyle={buttonStyle} tag='로그인' />
      <Link to='/register'>
        <span>계정이 없으신가요?</span>
      </Link>
    </div>
  );
}

export default Login;
