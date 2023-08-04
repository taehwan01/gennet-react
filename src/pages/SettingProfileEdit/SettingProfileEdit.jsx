import styles from './SettingProfileEdit.module.scss';

function SettingProfileEdit() {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>section1-test</div>
      <div className={styles.section2}>
        <div className={styles.inputWrapper}>
          <span>이름</span>
          <input className={styles.nameBox} type='text' placeholder='이름을 입력하세요.' />
          <span>생년월일</span>
          <input className={styles.dateBox} type='text' placeholder='년' />
          <input className={styles.dateBox} type='text' placeholder='월' />
          <input className={styles.dateBox} type='text' placeholder='일' />
          <span>자기소개</span>
          <input className={styles.introBox} type='text' placeholder='자신의 자격증 등을 어필해주세요.' />
        </div>
      </div>
      <div className={styles.section3}>
        <button type='button' className={styles.unsavedBtn}>
          저장하지 않기
        </button>
        <button type='button' className={styles.savedBtn}>
          프로필 저장
        </button>
      </div>
    </div>
  );
}

export default SettingProfileEdit;
