import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import styles from './ConfirmMessage.module.scss';
import Button from '../Button/Button';

function ConfirmMessage({ mainMessage, subMessage }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/senior');
  };

  const buttonStyle = {
    backgroundColor: '#57b0bc',
    width: '250px',
    height: '50px',
    fontSize: '29px',
    margin: '10px 0',
  };
  return (
    <div className={styles['confirm-container']}>
      <div className={styles['confirm-component']}>
        <div className={styles['message-box']}>
          <div className={`${styles['main-message']} font-bold`}>
            <span>{mainMessage}</span>
          </div>
          <div className={styles['sub-message']}>
            <span>{subMessage}</span>
          </div>
          <Button
            action={handleClick}
            buttonStyle={buttonStyle}
            tag='다른 수업 보러가기'
          />
        </div>
      </div>
    </div>
  );
}

ConfirmMessage.propTypes = {
  mainMessage: PropTypes.string.isRequired,
  subMessage: PropTypes.string.isRequired,
};

export default ConfirmMessage;
