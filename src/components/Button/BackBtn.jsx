import backIcon from '../../assets/images/back-icon.png';

import styles from './BackBtn.module.scss';

function BackBtn() {
  return (
    <button className={styles['back-btn']} type='button'>
      <img className={styles['back-icon']} src={backIcon} alt='Back Icon logo' />
    </button>
  );
}

export default BackBtn;
