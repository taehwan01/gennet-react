import styles from './SettingProfileEdit.module.scss';
import Button from '../../components/Button/Button';

import editIcon from '../../assets/images/photo-icon.png';

function SettingProfileEdit() {
  const buttonStyle1 = {
    backgroundColor: '#A7A9AC',
    width: '250px',
    height: '70px',
    borderRadius: '15px',
    fontSize: '40px',
    marginTop: '50px',
  };

  const buttonStyle2 = {
    backgroundColor: '#57b0bc',
    width: '250px',
    height: '70px',
    borderRadius: '15px',
    fontSize: '40px',
    marginTop: '50px',
  };

  return (
    <div className={styles.container}>
      <div className={styles.profile} />
      <div className={styles.profileEdit}>
        <img className={styles.editImage} src={editIcon} alt='edit Icon logo' />
      </div>
      <div className={styles.section2}>
        <div className={styles.formDiv}>
          <div className={styles.formTag}>
            <span>이름</span>
          </div>
          <input type='text' className={styles.nameBox} placeholder='이름을 입력하세요.' />
        </div>

        <div className={styles.formDiv}>
          <div className={styles.formTag}>
            <span>생년월일</span>
          </div>
          <input type='text' className={styles.dateBox} placeholder='년' />
          <input type='text' className={styles.dateBox} placeholder='월' />
          <input type='text' className={styles.dateBox} placeholder='일' />
        </div>

        <div className={styles.formDiv}>
          <div className={styles.formTag}>
            <span>자기소개</span>
          </div>
          <textarea
            className={`${styles.introBox} ${styles.formInputDescription}`}
            placeholder='자신의 자격증 등을 어필해주세요.'
          />
        </div>
      </div>
      <div className={styles.section3}>
        <Button buttonStyle={buttonStyle1} tag='저장하지 않기' />
        <Button buttonStyle={buttonStyle2} tag='저장하기' />
      </div>
    </div>
  );
}

export default SettingProfileEdit;
