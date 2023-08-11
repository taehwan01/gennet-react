import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from '../../pages/MyClasses/MyClasses.module.scss';
import Button from '../Button/Button';

function MyClass({ roomId, title, name }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    navigate(`/class-chat/:${roomId}`);
  };

  const buttonStyle = {
    backgroundColor: '#57b0bc',
    width: '200px',
    height: '80px',
    fontSize: `${user.type === 'SENIOR' ? '35pt' : '25pt'}`,
    borderRadius: '15px',
  };

  return (
    <div className={styles['my-class']}>
      <div className={styles['my-class-info']}>
        <span
          className={`${styles['with-tutor']} ${
            user.type === 'SENIOR' ? 'font-22pt' : 'font-18pt'
          }`}
        >
          청년 {name}님과 함께한
        </span>
        <span
          className={`${styles['class-title']} font-bold ${
            user.type === 'SENIOR' ? 'font-33pt' : 'font-25pt'
          }`}
        >
          {title}
        </span>
      </div>
      <Button action={handleClick} buttonStyle={buttonStyle} tag='다시보기' />
    </div>
  );
}

MyClass.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  roomId: PropTypes.string.isRequired,
};

export default MyClass;
