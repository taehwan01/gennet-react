import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './RequestClass.module.scss';
import PageBanner from '../../components/PageBanner/PageBanner';
import Button from '../../components/Button/Button';

function RequestClass() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const buttonStyle = {
    backgroundColor: '#57b0bc',
    width: '300px',
    height: '80px',
    fontSize: '40px',
    borderRadius: '15px',
    margin: '10px 0 30px 0',
  };
  const selectedBtn = {
    backgroundColor: '#57b0bc',
    border: '2px solid #57b0bc',
    width: '160px',
    height: '56px',
    borderRadius: '15px',
    fontSize: '22pt',
    // marginRight: '25px',
  };
  const unSelectedBtn = {
    backgroundColor: 'white',
    color: '#57b0bc',
    border: '2px solid #57b0bc',
    width: '160px',
    height: '56px',
    borderRadius: '15px',
    fontSize: '22pt',
    // marginRight: '25px',
  };

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = () => {
    navigate(`/${user.type.toLowerCase()}/request-class/confirmed`);
  };

  return (
    <div className={styles['request-class-page']}>
      <PageBanner
        pageTitle='수업 요청하기'
        pageIntro='궁금한 것들에 대해 수업을 요청해보세요.'
      />
      <div className={styles['request-class']}>
        <div> </div>
        <form className={styles['request-class-form']}>
          <div className={styles['form-solo-div']}>
            <div
              className={`${styles['form-tag']} ${styles['form-tag-text']} ${
                user.type === 'SENIOR' ? 'font-22pt' : 'font-20pt'
              }`}
            >
              <span>제목</span>
            </div>
            <input
              type='text'
              className={`${styles['form-input-text']} ${
                user.type === 'SENIOR' ? 'font-22pt' : 'font-20pt'
              }`}
              placeholder='제목을 입력하세요.'
            />
          </div>

          <div className={styles['form-solo-div']}>
            <div
              className={`${styles['form-tag']} ${styles['form-tag-text']} ${
                user.type === 'SENIOR' ? 'font-22pt' : 'font-20pt'
              }`}
            >
              <span>분야</span>
            </div>

            <div className={styles.formDiv}>
              <div className={styles.categoryForm}>
                <Button buttonStyle={selectedBtn} tag='식사주문' />
                <Button buttonStyle={unSelectedBtn} tag='경제생활' />
                <Button buttonStyle={unSelectedBtn} tag='일상생활' />
                <Button buttonStyle={unSelectedBtn} tag='기타' />
              </div>
            </div>
          </div>

          <div className={styles['form-solo-div']}>
            <div
              className={`${styles['form-tag']} ${
                styles['form-tag-textarea']
              } ${user.type === 'SENIOR' ? 'font-22pt' : 'font-20pt'}`}
            >
              <span>내용</span>
            </div>
            <textarea
              className={`${styles['form-input-textarea']} ${
                styles['form-input-description']
              } ${user.type === 'SENIOR' ? 'font-22pt' : 'font-20pt'}`}
              placeholder='어떤 내용의 수업을 듣고 싶나요?'
            />
          </div>

          {/* <div className={styles['form-solo-div']}>
            <div className={styles['form-tag']}>
              <span>사진 선택</span>
            </div>
            <input
              type='text'
              className={styles['form-input']}
              placeholder=''
            />
          </div> */}
          <Button
            action={handleSubmit}
            buttonStyle={buttonStyle}
            tag='수업 요청하기'
          />
        </form>
        <div> </div>
      </div>
    </div>
  );
}

export default RequestClass;
