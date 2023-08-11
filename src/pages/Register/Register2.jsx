// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register2.module.scss';
import Button from '../../components/Button/Button';
import logoImg from '../../assets/images/logo.png';

function Register2() {
  const navigate = useNavigate();

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
  // const categoryBtn = {
  //   backgroundColor: '#57b0bc',
  //   width: '140px',
  //   height: '50px',
  //   borderRadius: '15px',
  //   fontSize: '22pt',
  //   marginRight: '25px',
  // };

  // const etcBtn = {
  //   backgroundColor: '#57b0bc',
  //   width: '100px',
  //   height: '50px',
  //   borderRadius: '15px',
  //   fontSize: '22pt',
  // };
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
    navigate('/senior');
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
            type='text'
            className={styles.nameBox}
            placeholder='이름을 입력하세요.'
          />
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
            <Button buttonStyle={selectedBtn} tag='식사주문' />

            <Button buttonStyle={unSelectedBtn} tag='경제생활' />

            <Button buttonStyle={unSelectedBtn} tag='일상생활' />

            <Button buttonStyle={unSelectedBtn} tag='기타' />
          </div>
        </div>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
            <span>자기소개</span>
          </div>
          <textarea
            className={styles.introBox}
            placeholder='자신의 자격증 등을 어필해주세요.'
          />
        </div>
      </form>

      <Button
        action={handleRegister}
        buttonStyle={registerBtn}
        tag='회원가입'
      />
    </div>
  );
}

export default Register2;
