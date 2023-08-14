import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Register2.module.scss';
import Button from '../../components/Button/Button';
import logoImg from '../../assets/images/logo.png';

function Register2() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [selectedInterest, setSelectedInterest] = useState('식사주문');
  // form input
  const [name, setName] = useState('');
  const [nameValidation, setNameValidation] = useState(false);
  const [year, setYear] = useState(null);
  const [yearValidation, setYearValidation] = useState(false);
  const [month, setMonth] = useState(null);
  const [monthValidation, setMonthValidation] = useState(false);
  const [date, setDate] = useState(null);
  const [dateValidation, setDateValidation] = useState(false);
  // const [yearNumberValidation, setYearNumberValidation] = useState(false);
  // const [monthNumberValidation, setMonthNumberValidation] = useState(false);
  // const [dateNumberValidation, setDateNumberValidation] = useState(false);

  const selectedBtn = {
    backgroundColor: '#57b0bc',
    border: '2px solid #57b0bc',
    width: '140px',
    height: '56px',
    borderRadius: '15px',
    fontSize: '22pt',
    // marginRight: '23px',
  };
  const unSelectedBtn = {
    backgroundColor: 'white',
    color: '#57b0bc',
    border: '2px solid #57b0bc',
    width: '140px',
    height: '56px',
    borderRadius: '15px',
    fontSize: '22pt',
    // marginRight: '23px',
  };
  const registerBtn = {
    backgroundColor: '#57b0bc',
    width: '220px',
    height: '70px',
    borderRadius: '15px',
    fontSize: '30pt',
    margin: '10px 0 40px 0',
    // marginBottom: '130px',
  };

  const style = {
    color: 'red',
  };

  const handleRegister = () => {
    // 회원가입 버튼 클릭
    navigate(`/${user.type.toLowerCase()}`);
  };

  const [inputCount, setInputCount] = useState(0);

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };

  const handleNameChange = (event) => {
    const nameInput = event.target.value;
    setName(nameInput);
    setNameValidation(nameInput.length >= 2 && nameInput.length <= 10);
  };
  const handleYearChange = (event) => {
    const yearInput = event.target.value;
    setYear(yearInput);
    if (yearInput === '') {
      setYearValidation(false);
    } else {
      setYearValidation(Number(yearInput) >= 1900);
    }
  };
  const handleMonthChange = (event) => {
    const monthInput = event.target.value;
    setMonth(monthInput);
    if (monthInput === '') {
      setMonthValidation(false);
    } else {
      setMonthValidation(Number(monthInput) >= 1 && Number(monthInput) <= 12);
    }
  };
  const handleDateChange = (event) => {
    const dateInput = event.target.value;
    setDate(dateInput);
    if (dateInput === '') {
      setDateValidation(false);
    } else {
      setDateValidation(Number(dateInput) >= 1 && Number(dateInput) <= 31);
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logoImg} alt='logo icon' />
      <form>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
            <span style={style}>*</span>
            <span>이름</span>
          </div>
          <input
            className={styles.nameBox}
            placeholder='이름을 입력하세요.'
            type='text'
            value={name}
            onChange={handleNameChange}
          />
          <span className={styles['error-message-name']}>
            {name && !nameValidation ? '*이름은 2글자 이상 10글자 이하로 입력해주세요.' : ''}
          </span>
        </div>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
            <span style={style}>*</span>
            <span>생년월일</span>
          </div>
          <div className={styles.dateForm}>
            <input type='number' value={year} onChange={handleYearChange} className={styles.dateBox} placeholder='년' />
            <input
              type='number'
              value={month}
              onChange={handleMonthChange}
              className={styles.dateBox}
              placeholder='월'
            />
            <input type='number' value={date} onChange={handleDateChange} className={styles.dateBox} placeholder='일' />
          </div>
          <span className={styles['error-message-birth']}>
            {(yearValidation && monthValidation && dateValidation) || (!year && !month && !date)
              ? ''
              : '*유효하지 않은 날짜입니다.'}
          </span>
        </div>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
            <span>관심분야</span>
          </div>
          <div className={styles.categoryForm}>
            <Button
              buttonStyle={selectedInterest === '식사주문' ? selectedBtn : unSelectedBtn}
              tag='식사주문'
              action={() => setSelectedInterest('식사주문')}
            />
            <Button
              buttonStyle={selectedInterest === '경제생활' ? selectedBtn : unSelectedBtn}
              tag='경제생활'
              action={() => setSelectedInterest('경제생활')}
            />
            <Button
              buttonStyle={selectedInterest === '일상생활' ? selectedBtn : unSelectedBtn}
              tag='일상생활'
              action={() => setSelectedInterest('일상생활')}
            />
            <Button
              buttonStyle={selectedInterest === '기타' ? selectedBtn : unSelectedBtn}
              tag='기타'
              action={() => setSelectedInterest('기타')}
            />
          </div>
        </div>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
            <span>자기소개</span>
          </div>
          <div className={styles.introWrapper}>
            <textarea
              className={styles.introBox}
              onChange={onInputHandler}
              maxLength='255'
              placeholder='자신의 자격증 등을 어필해주세요.'
            />
            <p className={styles.lengthCount}>
              <span>{inputCount}</span>
              <span>/255 자</span>
            </p>
          </div>
        </div>
      </form>

      <Button action={handleRegister} buttonStyle={registerBtn} tag='회원가입' />
    </div>
  );
}

export default Register2;
