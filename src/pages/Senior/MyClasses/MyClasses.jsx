// import { useEffect } from 'react';
import DailyMyClassList from '../../../components/DailyMyClassList/DailyMyClassList';
import PageBanner from '../../../components/PageBanner/PageBanner';
import styles from './MyClasses.module.scss';
import MyClass from '../../../components/DailyMyClassList/MyClass';

const myClasses = [
  {
    category: '식사주문',
    title: '버거킹 키오스크 수업',
    name: '천다인',
    review: 4,
    date: new Date('2023-07-09'),
    roomId: 'room1',
  },
  {
    category: '경제생활',
    title: '애플페이 등록하기!!!',
    name: '천다인',
    review: 3,
    date: new Date('2023-07-09'),
    roomId: 'room2',
  },
  {
    category: '일상생활',
    title: '카카오택시 불러서 한강 놀러가기',
    name: '천다인',
    review: 5,
    date: new Date('2023-07-28'),
    roomId: 'room3',
  },
  {
    category: '식사주문',
    title: '배달의 민족으로 국밥 시키기',
    name: '천다인',
    review: 3,
    date: new Date('2023-07-28'),
    roomId: 'room4',
  },
  {
    category: '일상생활',
    title: '집에서 주민등록등본 출력하기',
    name: '천다인',
    review: 2,
    date: new Date('2023-07-28'),
    roomId: 'room5',
  },
  {
    category: '경제생활',
    title: '핸드폰으로 계좌이체 하기',
    name: '천다인',
    review: 4,
    date: new Date('2023-07-27'),
    roomId: 'room6',
  },
  {
    category: '경제생활',
    title: '인터넷뱅킹 하는 방법',
    name: '천다인',
    review: 4,
    date: new Date('2023-07-26'),
    roomId: 'room7',
  },
  // {
  //   category: '식사주문',
  //   title: '버거킹 키오스크 수업',
  //   name: '천다인',
  //   review: 4,
  // },
];

function groupByDate(classes) {
  const groups = classes.reduce((acc, myClass) => {
    const dateKey = myClass.date.toISOString().split('T')[0];
    // console.log('dateKey: ', dateKey);
    if (!acc[dateKey]) {
      acc[dateKey] = {
        date: myClass.date,
        myClass,
        otherClasses: [],
      };
    } else {
      acc[dateKey].otherClasses.push(myClass);
    }
    return acc;
  }, {});

  return Object.values(groups); // groups 객체의 원소값만 반환
}

function MyClasses() {
  const groupedClasses = groupByDate(myClasses);
  // useEffect(() => {
  //   console.log('group: ', groupedClasses);
  // }, []);
  return (
    <div className={styles['my-classes-page']}>
      <PageBanner pageTitle='내 수업' pageIntro='지난 수업을 확인하세요.' />
      {groupedClasses.map((group) => (
        <div className={styles['my-classes']}>
          <DailyMyClassList
            title={group.myClass.title}
            name={group.myClass.name}
            date={group.myClass.date}
            roomId={group.myClass.roomId}
          />
          {group.otherClasses.map((otherClass) => (
            <MyClass
              key={otherClass.title}
              title={otherClass.title}
              name={otherClass.name}
              roomId={otherClass.roomId}
            />
          ))}
        </div>
      ))}
      {/* {myClasses.map((myClass) => (
        <div className={styles['my-classes']}>
          <DailyMyClassList
            title={myClass.title}
            name={myClass.name}
            date={myClass.date}
          />
        </div>
      ))} */}
    </div>
  );
}

export default MyClasses;
