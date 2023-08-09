// import { useState } from 'react';
import styles from './Register2.module.scss';
import Button from '../../components/Button/Button';
import logoImg from '../../assets/images/logo.png';

function Register2() {
  //   const [buttonStyles, setButtonStyles] = useState(NonClickButton{
  //     backgroundColor: ''
  //     width: '140px',
  //     height: '50px',
  //     margin: '25px',
  //   });
  const categoryBtn = {
    backgroundColor: '#57b0bc',
    width: '140px',
    height: '50px',
    borderRadius: '15px',
    fontSize: '29px',
    marginRight: '25px',
  };
  const etcBtn = {
    backgroundColor: '#57b0bc',
    width: '100px',
    height: '50px',
    borderRadius: '15px',
    fontSize: '29px',
  };
  const registerBtn = {
    backgroundColor: '#57b0bc',
    width: '220px',
    height: '70px',
    borderRadius: '15px',
    fontSize: '40px',
    marginTop: '18px',
    marginBottom: '130px',
  };
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logoImg} alt='logo icon' />
      <form>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
            <span>이름</span>
          </div>
          <input type='text' className={styles.nameBox} placeholder='이름을 입력하세요.' />
        </div>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
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
            <Button buttonStyle={categoryBtn} tag='식사주문' />

            <Button buttonStyle={categoryBtn} tag='경제생활' />

            <Button buttonStyle={categoryBtn} tag='일상생활' />

            <Button buttonStyle={etcBtn} tag='기타' />
          </div>
        </div>
        <div className={styles.formDiv}>
          <div className={`${styles.formTag} font-bold`}>
            <span>자기소개</span>
          </div>
          <textarea className={styles.introBox} placeholder='자신의 자격증 등을 어필해주세요.' />
        </div>
      </form>

      <Button buttonStyle={registerBtn} tag='회원가입' />
    </div>
  );
}

export default Register2;
