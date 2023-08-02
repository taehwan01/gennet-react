import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import testIMG from '../../assets/images/banana.png';
import './NewClass.css';

function NewClass({ category, title, name, review }) {
  const [isAnimated, setIsAnimated] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    setIsAnimated(titleRef.current.scrollWidth > titleRef.current.clientWidth);
  }, [title]);

  return (
    <div className='new-class'>
      <img className='new-class-image' src={testIMG} alt='class-img' />
      <div className='new-class-info'>
        <div className='class-category'>
          <span className='class-category-string font-bold'>{category}</span>
        </div>
        <p
          ref={titleRef}
          className={`class-title ${isAnimated ? 'is-animated' : ''}`}
          data-text={title}
        >
          {title}
        </p>
        <p className='tutor-info'>
          <span className='tutor-name'>{name}</span>
          <span className='tutor-review'>
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
