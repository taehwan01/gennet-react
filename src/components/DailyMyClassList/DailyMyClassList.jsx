import PropTypes from 'prop-types';

// import { useEffect } from 'react';
import styles from '../../pages/MyClasses/MyClasses.module.scss';
import MyClass from './MyClass';

function formatDate(date) {
  const dateMonth = date.getMonth() + 1;
  const dateDay = date.getDate();
  return `${dateMonth < 10 ? `0${dateMonth}` : dateMonth}/${
    dateDay < 10 ? `0${dateDay}` : dateDay
  }`;
}

function DailyMyClassList({ roomId, title, name, date }) {
  const formattedDate = formatDate(date);

  return (
    <div style={{ marginTop: '2rem' }}>
      <p className={`${styles['date-of-lists']} font-bold `}>{formattedDate}</p>
      <MyClass title={title} name={name} roomId={roomId} />
    </div>
  );
}

DailyMyClassList.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  roomId: PropTypes.string.isRequired,
};

export default DailyMyClassList;
