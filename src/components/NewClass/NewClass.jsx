import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classIMG1 from '../../assets/images/class-image-1.png';
import classIMG2 from '../../assets/images/class-image-2.png';
import classIMG3 from '../../assets/images/class-image-3.png';
import styles from './NewClass.module.scss';

const classIMG = [classIMG1, classIMG2, classIMG3];

function NewClass({ postId, category, title, name, review, classImg }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [isAnimated, setIsAnimated] = useState(false);
  const titleRef = useRef(null);
  const [loopTitle, setLoopTitle] = useState(title);

  const handleClickClass = () => {
    navigate(`/${user.memberType.toLowerCase()}/class/${postId}`);
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
      <img className={styles['new-class-image']} src={classIMG[classImg]} alt='class-img' />
      <div className={styles['new-class-info']}>
        <div className={styles['class-category']}>
          <span className={`${styles['class-category-string']} font-bold`}>{category}</span>
        </div>
        <p
          ref={titleRef}
          className={`${styles['class-title']} font-bold ${isAnimated ? styles['is-animated'] : ''}`}
          data-text={loopTitle}
        >
          {loopTitle}
        </p>
        <div className={styles['tutor-info']}>
          <span className={styles['tutor-name']}>{name}</span>
          <span className={styles['tutor-review']}>
            {`${'★'.repeat(review)}${'☆'.repeat(5 - review)} ${review.toFixed(1)}점`}
          </span>
        </div>
      </div>
    </div>
  );
}

NewClass.propTypes = {
  postId: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  review: PropTypes.number.isRequired,
  classImg: PropTypes.number.isRequired,
};

export default NewClass;
