import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import testIMG from '../../assets/images/banana.png';
import styles from './NewClass.module.scss';

function NewClass({ category, title, name, review }) {
  const navigate = useNavigate();

  const [isAnimated, setIsAnimated] = useState(false);
  const titleRef = useRef(null);
  const [loopTitle, setLoopTitle] = useState(title);

  const handleClickClass = () => {
    navigate('/senior/class/1');
  };

  useEffect(() => {
    setIsAnimated(titleRef.current.scrollWidth > titleRef.current.clientWidth);
    if (titleRef.current.scrollWidth > titleRef.current.clientWidth) {
      setLoopTitle(`${title} - `.repeat(10));
    }
  }, [title]);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={styles['new-class']} onClick={handleClickClass}>
      <img
        className={styles['new-class-image']}
        src={testIMG}
        alt='class-img'
      />
      <div className={styles['new-class-info']}>
        <div className={styles['class-category']}>
          <span className={`${styles['class-category-string']} font-bold`}>
            {category}
          </span>
        </div>
        <p
          ref={titleRef}
          className={`${styles['class-title']} ${
            isAnimated ? styles['is-animated'] : ''
          }`}
          data-text={loopTitle}
        >
          {loopTitle}
        </p>
        <div className={styles['tutor-info']}>
          <span className={styles['tutor-name']}>{name}</span>
          <span className={styles['tutor-review']}>
            {`${'★'.repeat(review)}${'☆'.repeat(5 - review)} ${review.toFixed(
              1,
            )}점`}
          </span>
        </div>
      </div>
    </div>
  );
}

NewClass.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  review: PropTypes.number.isRequired,
};

export default NewClass;
