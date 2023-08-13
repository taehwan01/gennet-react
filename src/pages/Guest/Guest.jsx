import { useNavigate } from 'react-router-dom';
import styles from './Guest.module.scss';
import Button from '../../components/Button/Button';

function Guest() {
  const navigate = useNavigate();
  const loginClick = () => {
    navigate(`/login`);
  };
  const registerClick = () => {
    navigate(`/register`);
  };
  const loginButton = {
    backgroundColor: '#57b0bc',
    width: '200px',
    height: '70px',
    borderRadius: '15px',
    fontSize: '30pt',
  };
  const registerButton = {
    backgroundColor: '#57b0bc',
    width: '230px',
    height: '70px',
    borderRadius: '15px',
    fontSize: '30pt',
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageFile} />
      <div className={styles.buttons}>
        <Button action={loginClick} buttonStyle={loginButton} tag='로그인' />
        <Button action={registerClick} buttonStyle={registerButton} tag='회원가입' />
      </div>
    </div>
  );
}

export default Guest;
