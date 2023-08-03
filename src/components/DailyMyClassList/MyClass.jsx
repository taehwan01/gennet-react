import PropTypes from 'prop-types';

import styles from '../../pages/Senior/MyClasses/MyClasses.module.scss';
import Button from '../Button/Button';

function MyClass({ title, name }) {
  const buttonStyle = {
    backgroundColor: '#57b0bc',
    width: '200px',
    height: '80px',
    borderRadius: '15px',
  };

  return (
    <div className={styles['my-class']}>
      <div className={styles['my-class-info']}>
        <span className={styles['with-tutor']}>청년 {name}님과 함께한</span>
        <span className={`${styles['class-title']} font-bold`}>{title}</span>
      </div>
      <Button buttonStyle={buttonStyle} tag='다시보기' />
    </div>
  );
}

MyClass.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MyClass;
