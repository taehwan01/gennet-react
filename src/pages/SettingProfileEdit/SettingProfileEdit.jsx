import { useSelector } from 'react-redux';
import styles from './SettingProfileEdit.module.scss';
import Button from '../../components/Button/Button';

import editIcon from '../../assets/images/photo-icon.png';
import testIMG from '../../assets/images/banana.png';

function SettingProfileEdit() {
  const user = useSelector((state) => state.user);

  const unsavedBtn = {
    backgroundColor: '#A7A9AC',
    width: '250px',
    height: '70px',
    borderRadius: '15px',
    marginTop: '25px',
    marginRight: '240px',
    fontSize: `${user.type === 'SENIOR' ? '30pt' : '25pt'}`,
  };

  const savedBtn = {
    backgroundColor: '#57b0bc',
    width: '250px',
    height: '70px',
    borderRadius: '15px',
    marginTop: '25px',
    marginLeft: '240px',
    fontSize: `${user.type === 'SENIOR' ? '30pt' : '25pt'}`,
  };

  return (
    <div className={styles.container}>
      <div>
        <img className={styles.profile} src={testIMG} alt='Profile IMG' />
      </div>
      <div className={styles.profileEdit}>
        <img className={styles.editImage} src={editIcon} alt='edit Icon logo' />
      </div>
      <div className={styles.formSection}>
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
            <span>자기소개</span>
          </div>
          <textarea className={styles.introBox} placeholder='자신의 자격증 등을 어필해주세요.' />
        </div>
      </div>
      <div className={styles.buttonSection}>
        <Button buttonStyle={unsavedBtn} tag='저장하지 않기' />
        <Button buttonStyle={savedBtn} tag='저장하기' />
      </div>
    </div>
  );
}

export default SettingProfileEdit;
