import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AdCarousel from '../../components/AdCarousel/AdCarousel';
import NewClass from '../../components/NewClass/NewClass';

import styles from './Main.module.scss';

// const newClasses = [
//   {
//     category: '식사주문',
//     title: '버거킹 키오스크 수업',
//     name: '천다인',
//     review: 4,
//     classImg: 1,
//   },
//   {
//     category: '경제생활',
//     title: '애플페이 등록하기!!!',
//     name: '천다인',
//     review: 3,
//     classImg: 2,
//   },
//   {
//     category: '일상생활',
//     title: '카카오택시 불러서 한강 놀러가기',
//     name: '천다인',
//     review: 5,
//     classImg: 1,
//   },
//   {
//     category: '식사주문',
//     title: '배달의 민족으로 국밥 시키기',
//     name: '천다인',
//     review: 3,
//     classImg: 0,
//   },
//   {
//     category: '일상생활',
//     title: '집에서 주민등록등본 출력하기',
//     name: '천다인',
//     review: 2,
//     classImg: 0,
//   },
//   {
//     category: '경제생활',
//     title: '핸드폰으로 계좌이체 하기',
//     name: '천다인',
//     review: 4,
//     classImg: 1,
//   },
//   {
//     category: '경제생활',
//     title: '인터넷뱅킹 하는 방법',
//     name: '천다인',
//     review: 4,
//     classImg: 2,
//   },
//   // {
//   //   category: '식사주문',
//   //   title: '버거킹 키오스크 수업',
//   //   name: '천다인',
//   //   review: 4,
//   // },
// ];

function Main() {
  const user = useSelector((state) => state.user);
  const [newClasses, setNewClasses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://ec2-13-209-8-248.ap-northeast-2.compute.amazonaws.com:8080//posts', {
          headers: { Authorization: user.accessToken },
        });
        setNewClasses(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }

    fetchData();
  }, [user.accessToken]);

  return (
    <div className={styles['main-page']}>
      <AdCarousel />
      {`${user.memberId} ${user.memberType} ${user.name}- ${user.memberId}`}
      <div className={styles.messages}>
        <p
          className={`${styles['main-message']} font-bold ${user.memberType === 'SENIOR' ? 'font-30pt' : 'font-28pt'}`}
        >
          참여해보세요!
        </p>
        <p className={`${styles['sub-message']} ${user.memberType === 'SENIOR' ? 'font-22pt' : 'font-18pt'}`}>
          {user.memberType === 'SENIOR' ? `${user.name}님에게 추천하는 수업들` : '지금 시니어들이 요청한 수업들'}
        </p>
      </div>
      <div className={styles['new-classes']}>
        {newClasses.map((newClass) => (
          <NewClass
            // eslint-disable-next-line react/no-array-index-key
            key={newClass.postId}
            postId={newClass.postId}
            category={newClass.lifeCategory}
            title={newClass.title}
            name={newClass.postMemberId}
            review={newClass.viewCount}
            classImg={newClass.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
