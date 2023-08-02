import DailyMyClassList from '../../../components/DailyMyClassList/DailyMyClassList';
import PageBanner from '../../../components/PageBanner/PageBanner';
import styles from './MyClasses.module.scss';

function MyClasses() {
  return (
    <div className={styles['my-classes-page']}>
      <PageBanner pageTitle='내 수업' pageIntro='지난 수업을 확인하세요.' />
      <div className={styles['my-classes']}>
        <DailyMyClassList />
      </div>
    </div>
  );
}

export default MyClasses;
