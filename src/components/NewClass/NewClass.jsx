import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import testIMG from '../../assets/images/banana.png';
import styles from './NewClass.module.scss';

function NewClass({ category, title, name, review }) {
  const [isAnimated, setIsAnimated] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    setIsAnimated(titleRef.current.scrollWidth > titleRef.current.clientWidth);
  }, [title]);

  return (
    <div className={styles['new-class']}>
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
            isAnimated ? 'is-animated' : ''
          }`}
          data-text={title}
        >
          {title}
        </p>
        <p className={styles['tutor-info']}>
          <span className={styles['tutor-name']}>{name}</span>
          <span className={styles['tutor-review']}>
            {`${'★'.repeat(review)}${'☆'.repeat(5 - review)}`}
          </span>
        </p>
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
