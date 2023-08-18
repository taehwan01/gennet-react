/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './ClassDescription.module.scss';
import Button from '../../components/Button/Button';
import BackBtn from '../../components/Button/BackBtn';
// import juniorImg from '../../assets/images/junior.png';
import seniorImg from '../../assets/images/senior.png';
// import juniorImg from '../../assets/images/junior.png';
import classImg1 from '../../assets/images/class-image-1.png';
// import MyClass from '../../components/DailyMyClassList/MyClass';

const classTxt = `프랜차이즈 버거 브랜드인 버거킹의 키오스크를 다뤄봅시다.옵션 선택부터 결제까지 차근차근 알려드려요.`;
function ClassDescription() {
  const user = useSelector((state) => state.user);
  const { postId } = useParams();

  const [roomId, setRoomId] = useState(2); // room ID 생성(임시)
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [lifeCategory, setLifeCategory] = useState('');
  const [postMemberId, setPostMemberId] = useState('');

  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate(`/${user.memberType.toLowerCase()}/profile`);
  };
  const handleChatClick = () => {
    console.log(roomId);
    navigate(`/class-chat/${roomId}`);
  };
  const categoryBtn = {
    backgroundColor: '#57b0bc',
    width: `${user.memberType === 'SENIOR' ? '120px' : '105px'}`,
    height: `${user.memberType === 'SENIOR' ? '40px' : '38px'}`,
    borderRadius: '10px',
    fontSize: `${user.memberType === 'SENIOR' ? '19pt' : '18pt'}`,
  };
  const buttonStyle = {
    backgroundColor: '#57b0bc',
    width: '280px',
    height: '60px',
    borderRadius: '10px',
    fontSize: '25pt',
  };
  const review = 4;
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://ec2-13-209-8-248.ap-northeast-2.compute.amazonaws.com:8080//posts/${postId}`,
          {
            headers: { Authorization: user.accessToken },
          },
        );
        setTitle(response.data.title);
        setContent(response.data.content);
        setLifeCategory(response.data.lifeCategory);
        setPostMemberId(response.data.postMemberId);

        console.log({ title, content, lifeCategory, postMemberId });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <BackBtn />
      </div>
      <div className={styles.section2}>
        <div className={styles.classBox}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <button type='button' className={styles.profileButton} onClick={handleProfileClick}>
                {/* <img
                  className={styles.profile}
                  alt='Profile IMG'
                  src={
                    user.memberType === 'SENIOR' ? { seniorImg } : { juniorImg }
                  }
                /> */}
                <img className={styles.profile} src={seniorImg} alt='Profile IMG' />
              </button>
            </div>
            <div className={styles.topRight}>
              <span className={`${styles.userName} font-bold`}>id: {postMemberId}</span>
              <div className={styles.tutorEvaluate}>
                {user.memberType === 'SENIOR' ? (
                  <>
                    <span className={styles.tutorReview}>{`${'★'.repeat(review)}${'☆'.repeat(5 - review)}`}</span>
                    <span className={styles.tutorScore}>4.0점</span>
                  </>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>

          <div className={styles.class}>
            <img className={styles.classImage} src={classImg1} alt='class-img' />
            <div className={`${styles.classInfo} ${styles.scrollable}`}>
              <div className={styles.category}>
                <Button buttonStyle={categoryBtn} tag={`${lifeCategory}`} />
              </div>
              <span
                className={`${styles.classTitle} font-bold ${user.memberType === 'SENIOR' ? 'font-25pt' : 'font-22pt'}`}
              >
                {title}
              </span>
              <div
                className={`${styles.classInformationWrapper} ${
                  user.memberType === 'SENIOR' ? 'font-20pt' : 'font-18pt'
                }`}
              >
                <p className={styles.classInformation}>{content}</p>
              </div>
            </div>
            <div className={styles.bottom}>
              {user.memberType === 'SENIOR' ? (
                <Button buttonStyle={buttonStyle} tag='수업 들으러 가기' action={handleChatClick} />
              ) : (
                <Button buttonStyle={buttonStyle} tag='수업 하러 가기' action={handleChatClick} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section3} />
    </div>
  );
}

export default ClassDescription;
