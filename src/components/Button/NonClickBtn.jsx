import PropTypes from 'prop-types';

import styles from './NonClickBtn.module.scss';

function Button({ action, buttonStyle, tag }) {
  return (
    <button type='button' className={styles['button-component']} onClick={action}>
      <div className={styles['button-container']} style={{ ...buttonStyle, padding: '0' }} type='button'>
        <span className='font-bold'>{tag}</span>
      </div>
    </button>
  );
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
  buttonStyle: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }).isRequired,
  tag: PropTypes.string.isRequired,
};

export default Button;
