import { useSelector } from 'react-redux';
import AdCarousel from '../../components/AdCarousel/AdCarousel';
import NewClass from '../../components/NewClass/NewClass';

import styles from './Main.module.scss';

const newClasses = [
  {
    category: '식사주문',
    title: '버거킹 키오스크 수업',
    name: '천다인',
    review: 4,
    classImg: 1,
  },
  {
    category: '경제생활',
    title: '애플페이 등록하기!!!',
    name: '천다인',
    review: 3,
    classImg: 2,
  },
  {
    category: '일상생활',
    title: '카카오택시 불러서 한강 놀러가기',
    name: '천다인',
    review: 5,
    classImg: 1,
  },
  {
    category: '식사주문',
    title: '배달의 민족으로 국밥 시키기',
    name: '천다인',
    review: 3,
    classImg: 0,
  },
  {
    category: '일상생활',
    title: '집에서 주민등록등본 출력하기',
    name: '천다인',
    review: 2,
    classImg: 0,
  },
  {
    category: '경제생활',
    title: '핸드폰으로 계좌이체 하기',
    name: '천다인',
    review: 4,
    classImg: 1,
  },
  {
    category: '경제생활',
    title: '인터넷뱅킹 하는 방법',
    name: '천다인',
    review: 4,
    classImg: 2,
  },
  // {
  //   category: '식사주문',
  //   title: '버거킹 키오스크 수업',
  //   name: '천다인',
  //   review: 4,
  // },
];

function Main() {
  const user = useSelector((state) => state.user);

  return (
    <div className={styles['main-page']}>
      <AdCarousel />
      <div className={styles.messages}>
        <p className={`${styles['main-message']} font-bold ${user.type === 'SENIOR' ? 'font-30pt' : 'font-28pt'}`}>
          참여해보세요!
        </p>
        <p className={`${styles['sub-message']} ${user.type === 'SENIOR' ? 'font-22pt' : 'font-18pt'}`}>
          {user.type === 'SENIOR' ? `${user.name}님에게 추천하는 수업들` : '지금 시니어들이 요청한 수업들'}
        </p>
      </div>
      <div className={styles['new-classes']}>
        {newClasses.map((newClass) => (
          <NewClass
            category={newClass.category}
            title={newClass.title}
            name={newClass.name}
            review={newClass.review}
            classImg={newClass.classImg}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
