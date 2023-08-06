import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './Star.module.scss';

const array = [0, 1, 2, 3, 4];

function Star() {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    const clickStates = [...clicked];
    for (let i = 0; i < 5; i += 1) {
      clickStates[i] = i <= index;
    }
    setClicked(clickStates);
  };
  const sendReview = () => {
    const score = clicked.filter(Boolean).length;
    console.log(score);
  };
  useEffect(() => {
    sendReview();
  }, [clicked]);

  return (
    <div className={styles.star}>
      {array.map((el, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <FaStar key={idx} size='50' onClick={() => handleStarClick(el)} className={clicked[el] && styles.yellowStar} />
      ))}
    </div>
  );
}

export default Star;
