import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import styles from './Star.module.scss';

const array = [0, 1, 2, 3, 4];

function Star({ memberId, ratedMemberId }) {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    const clickStates = [...clicked];
    for (let i = 0; i < 5; i += 1) {
      clickStates[i] = i <= index;
    }
    setClicked(clickStates);
  };

  const sendReview = async () => {
    const score = clicked.filter(Boolean).length;

    try {
      // HTTP POST 요청 보내기
      const response = await axios.post('http://localhost:8080/star-rate/set-rating', {
        memberId,
        ratedMemberId,
        rating: score,
      });

      if (response.status === 200) {
        console.log('별점이 성공적으로 등록되었습니다.');
      } else {
        console.log('별점 등록에 실패했습니다.');
      }
    } catch (error) {
      console.error('별점 등록 중 오류가 발생했습니다.', error);
    }
  };
  useEffect(() => {
    sendReview();
  }, [clicked, memberId, ratedMemberId]);

  return (
    <div className={styles.star}>
      {array.map((el, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <FaStar key={idx} size='90' onClick={() => handleStarClick(el)} className={clicked[el] && styles.yellowStar} />
      ))}
    </div>
  );
}

export default Star;
