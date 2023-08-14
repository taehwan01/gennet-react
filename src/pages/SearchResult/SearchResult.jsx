import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NewClass from '../../components/NewClass/NewClass';

import styles from './SearchResult.module.scss';

const newClasses = [
  // {
  //   category: '식사주문',
  //   title: '버거킹 키오스크 수업',
  //   name: '천다인',
  //   review: 4,
  //   classImg: 1,
  // },
  // {
  //   category: '경제생활',
  //   title: '애플페이 등록하기!!!',
  //   name: '천다인',
  //   review: 3,
  //   classImg: 2,
  // },
  // {
  //   category: '일상생활',
  //   title: '카카오택시 불러서 한강 놀러가기',
  //   name: '천다인',
  //   review: 5,
  //   classImg: 1,
  // },
  // {
  //   category: '식사주문',
  //   title: '배달의 민족으로 국밥 시키기',
  //   name: '천다인',
  //   review: 3,
  //   classImg: 0,
  // },
  // {
  //   category: '일상생활',
  //   title: '집에서 주민등록등본 출력하기',
  //   name: '천다인',
  //   review: 2,
  //   classImg: 0,
  // },
  // {
  //   category: '경제생활',
  //   title: '핸드폰으로 계좌이체 하기',
  //   name: '천다인',
  //   review: 4,
  //   classImg: 1,
  // },
  // {
  //   category: '경제생활',
  //   title: '인터넷뱅킹 하는 방법',
  //   name: '천다인',
  //   review: 4,
  //   classImg: 2,
  // },
];

function Main() {
  const user = useSelector((state) => state.user);
  const { keyword } = useParams();

  return (
    <div className={styles['search-result-page']}>
      <div className={styles.messages}>
        <p className={`${styles['main-message']} font-bold ${user.type === 'SENIOR' ? 'font-30pt' : 'font-28pt'}`}>
          &apos;{keyword}&apos;(으)로 검색한 결과
        </p>
      </div>
      <div className={styles['new-classes']}>
        {newClasses.length === 0 ? (
          <span className={`${styles['no-result']} ${user.type === 'SENIOR' ? 'font-25pt' : 'font-22pt'}`}>
            검색 결과가 없습니다.
          </span>
        ) : (
          newClasses.map((newClass) => (
            <NewClass
              category={newClass.category}
              title={newClass.title}
              name={newClass.name}
              review={newClass.review}
              classImg={newClass.classImg}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Main;
