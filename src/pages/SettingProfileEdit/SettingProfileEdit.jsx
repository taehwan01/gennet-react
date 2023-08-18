/* eslint-disable object-shorthand */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styles from './SettingProfileEdit.module.scss';
import Button from '../../components/Button/Button';

import editIcon from '../../assets/images/photo-icon.png';
import youthIMG from '../../assets/images/junior.png';
import seniorIMG from '../../assets/images/senior.png';
import { resetToken, editProfile } from '../../store';

function SettingProfileEdit() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [userName, setUserName] = useState('');
  const [userNameValidation, setUserNameValidation] = useState(false);
  const [year, setYear] = useState('');
  const [yearValidation, setYearValidation] = useState(false);
  const [month, setMonth] = useState('');
  const [monthValidation, setMonthValidation] = useState(false);
  const [date, setDate] = useState('');
  const [dateValidation, setDateValidation] = useState(false);
  const [userDateOfBirth, setUserDateOfBirth] = useState('');
  const [userIntroduction, setUserIntroduction] = useState('');

  const handleNameChange = (event) => {
    const userNameInput = event.target.value;
    setUserName(userNameInput);
    setUserNameValidation(userNameInput.length >= 2 && userNameInput.length <= 10);
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

  useEffect(() => {
    setUserDateOfBirth(`${Number(year)}.${Number(month)}.${Number(date)}`);
    // 백엔드로 생년월일 보낼 형식 지정했음
    // console.log(userDateOfBirth);
  }, [year, month, date, userDateOfBirth]);

  const handleSave = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/members/${user.memberId}/edit`,
        {
          name: userName,
          // image:
          //   'https://gennetimage.s3.ap-northeast-2.amazonaws.com/member/759fe657-9be9-4adb-aeab-7d995361db67.KakaoTalk_20230628_133838367.jpg',
          dateOfBirth: userDateOfBirth,
          introduction: userIntroduction,
        },
        { headers: { Authorization: user.accessToken } }
      );
      const { name, dateOfBirth, introduction } = response.data;
      dispatch(editProfile({ name, dateOfBirth, introduction }));
    } catch (error) {
      if (error.response.status === 401) {
        const response = await axios.post('http://localhost:8080/auth/reissue', {
          headers: {
            Refresh: user.refreshToken,
          },
        });
        const accessToken = response.headers.authorization;
        dispatch(resetToken({ accessToken }));
      }
      console.log(error);
    }
  };
  const unsavedBtn = {
    backgroundColor: '#A7A9AC',
    width: '250px',
    height: '70px',
    borderRadius: '15px',
    marginTop: '25px',
    marginRight: '240px',
    fontSize: `${user.memberType === 'SENIOR' ? '30pt' : '25pt'}`,
  };

  const savedBtn = {
    backgroundColor: '#57b0bc',
    width: '250px',
    height: '70px',
    borderRadius: '15px',
    marginTop: '25px',
    marginLeft: '240px',
    fontSize: `${user.memberType === 'SENIOR' ? '30pt' : '25pt'}`,
  };

  const handleImgUpload = (event) => {
    const imgFile = event.target.files[0];
    // eslint-disable-next-line no-console
    console.log(imgFile);
  };

  const [inputCount, setInputCount] = useState(0);

  const onInputHandler = (e) => {
    setUserIntroduction(e.target.value);
    setInputCount(e.target.value.length);
  };

  return (
    <div className={styles.container}>
      <div>
        <img
          className={styles.profile}
          src={`${user.memberType === 'SENIOR' ? seniorIMG : youthIMG}`}
          alt='Profile IMG'
        />
      </div>
      <div className={styles.profileEdit}>
        <label htmlFor='imgInput' className={styles.labelForm}>
          <img className={styles.editImage} src={editIcon} alt='edit Icon logo' />
          <input id='imgInput' type='file' accept='image/*' onChange={handleImgUpload} style={{ display: 'none' }} />
        </label>
      </div>
      <div className={styles.formSection}>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
            <span>이름</span>
          </div>
          <input
            type='text'
            className={styles.nameBox}
            placeholder='이름을 입력하세요.'
            value={userName}
            onChange={handleNameChange}
          />
          <span className={styles['error-message-name']}>
            {userName && !userNameValidation ? '*이름은 2글자 이상 10글자 이하로 입력해주세요.' : ''}
          </span>
        </div>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
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
          {/* <div className={styles.dateForm}>
            <input type='text' className={styles.dateBox} placeholder='년' />
            <input type='text' className={styles.dateBox} placeholder='월' />
            <input type='text' className={styles.dateBox} placeholder='일' />
          </div> */}
        </div>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
            <span>자기소개</span>
          </div>
          <div className={styles.introWrapper}>
            <textarea
              className={styles.introBox}
              value={userIntroduction}
              onChange={onInputHandler}
              maxLength='255'
              placeholder={`${
                user.memberType === 'SENIOR' ? '자신의 자격증 등을 어필해주세요.' : '자신을 소개해주세요.'
              }`}
            />
            <p className={styles.lengthCount}>
              <span>{inputCount}</span>
              <span>/255 자</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.buttonSection}>
        <Button buttonStyle={unsavedBtn} tag='저장하지 않기' />
        <Button action={handleSave} buttonStyle={savedBtn} tag='저장하기' />
      </div>
    </div>
  );
}

export default SettingProfileEdit;
