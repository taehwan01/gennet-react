import PropTypes from 'prop-types';

import styles from './Button.module.scss';

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
  action: PropTypes.func,
  buttonStyle: PropTypes.shape({
    backgroundColor: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    fontSize: PropTypes.string,
    borderRadius: PropTypes.string,
    margin: PropTypes.string,
  }).isRequired,
  tag: PropTypes.string.isRequired,
};

Button.defaultProps = {
  action: () => {}, // 기본적으로 빈 함수를 할당하거나 원하는 기본값으로 설정하세요.
};

export default Button;
