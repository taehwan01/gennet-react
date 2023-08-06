import { useNavigate } from 'react-router-dom';
import styles from './RequestClass.module.scss';
import PageBanner from '../../../components/PageBanner/PageBanner';
import Button from '../../../components/Button/Button';

function RequestClass() {
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: '#57b0bc',
    width: '300px',
    height: '80px',
    fontSize: '40px',
    borderRadius: '15px',
    margin: '0 0 40px 0',
  };

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = () => {
    navigate('/senior/request-class/confirmed');
  };

  return (
    <>
      <PageBanner
        pageTitle='수업 요청하기'
        pageIntro='궁금한 것들에 대해 수업을 요청해보세요.'
      />
      <div className={styles['request-class']}>
        <div> </div>
        <form className={styles['request-class-form']}>
          <div className={styles['form-solo-div']}>
            <div className={`${styles['form-tag']} ${styles['form-tag-text']}`}>
              <span>제목</span>
            </div>
            <input
              type='text'
              className={styles['form-input-text']}
              placeholder='제목을 입력하세요.'
            />
          </div>

          <div className={styles['form-solo-div']}>
            <div className={`${styles['form-tag']} ${styles['form-tag-text']}`}>
              <span>분야</span>
            </div>
            <input
              type='text'
              className={styles['form-input-text']}
              placeholder='식사주문'
            />
          </div>

          <div className={styles['form-solo-div']}>
            <div
              className={`${styles['form-tag']} ${styles['form-tag-textarea']}`}
            >
              <span>내용</span>
            </div>
            <textarea
              className={`${styles['form-input-textarea']} ${styles['form-input-description']}`}
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
    </>
  );
}

export default RequestClass;
