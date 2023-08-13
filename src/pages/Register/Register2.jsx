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

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logoImg} alt='logo icon' />
      <form>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
            <span style={style}>*</span>
            <span>이름</span>
          </div>
          <input type='text' className={styles.nameBox} placeholder='이름을 입력하세요.' />
        </div>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
            <span style={style}>*</span>
            <span>생년월일</span>
          </div>
          <div className='dateForm'>
            <input type='text' className={styles.dateBox} placeholder='년' />
            <input type='text' className={styles.dateBox} placeholder='월' />
            <input type='text' className={styles.dateBox} placeholder='일' />
          </div>
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
