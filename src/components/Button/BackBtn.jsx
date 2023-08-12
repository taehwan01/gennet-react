import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/images/back-icon.png';

import styles from './BackBtn.module.scss';

function BackBtn() {
  const navigate = useNavigate();
  const onClickButton = () => {
    navigate(-1);
  };
  return (
    <button
      onClick={onClickButton}
      className={styles['back-btn']}
      type='button'
    >
      <img
        className={styles['back-icon']}
        src={backIcon}
        alt='Back Icon logo'
      />
    </button>
  );
}

export default BackBtn;
