import PropTypes from 'prop-types';

import styles from './Button.module.scss';

function Button({ buttonStyle, tag }) {
  return (
    <div className={styles['button-component']}>
      <div
        className={styles['button-container']}
        style={{ ...buttonStyle, padding: '0' }}
        type='button'
      >
        <span className='font-bold'>{tag}</span>
      </div>
    </div>
  );
}

Button.propTypes = {
  buttonStyle: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Button;
