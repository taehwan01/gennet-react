import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import styles from './RequestClass.module.scss';

import PageBanner from '../../components/PageBanner/PageBanner';
import Button from '../../components/Button/Button';
import classIMG1 from '../../assets/images/class-image-1.png';
import classIMG2 from '../../assets/images/class-image-2.png';
import classIMG3 from '../../assets/images/class-image-3.png';

function RequestClass() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const imageInputRef = useRef();

  const [selectedInterest, setSelectedInterest] = useState('식사주문');
  const [imageFile, setImageFile] = useState(null);

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

  const handleFileChange = (event) => {
    const image = event.target.files[0];
    if (image && image.type.includes('image')) {
      setImageFile(image);
    } else {
      // eslint-disable-next-line no-alert
      alert('Please select valid image file.');
    }
  };

  const handleFileInputClick = () => {
    imageInputRef.current.click();
  };

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = () => {
    navigate(`/${user.type.toLowerCase()}/request-class/confirmed`);
  };

  const [inputCount, setInputCount] = useState(0);

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };

  return (
    <div className={styles['request-class-page']}>
      <PageBanner
        pageTitle={`${user.type === 'SENIOR' ? '수업 요청하기' : '수업 등록하기'}`}
        pageIntro={`${
          user.type === 'SENIOR'
            ? '궁금한 것들에 대해 수업을 요청해보세요.'
            : '시니어에게 알려주고 싶은 수업을 등록하세요.'
        }`}
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
              className={`${styles['form-input-text']} ${user.type === 'SENIOR' ? 'font-22pt' : 'font-20pt'}`}
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
          </div>

          <div className={styles['form-solo-div']}>
            <div
              className={`${styles['form-tag']} ${styles['form-tag-textarea']} ${
                user.type === 'SENIOR' ? 'font-22pt' : 'font-20pt'
              }`}
            >
              <span style={{ paddingTop: '4px' }}>내용</span>
            </div>
            <textarea
              className={`${styles['form-input-textarea']} ${styles['form-input-description']} ${
                user.type === 'SENIOR' ? 'font-22pt' : 'font-20pt'
              }`}
              onChange={onInputHandler}
              maxLength='255'
              placeholder='어떤 내용의 수업을 듣고 싶나요?'
            />
            <p className={styles.lengthCount}>
              <span>{inputCount}</span>
              <span>/255 자</span>
            </p>
          </div>
          <div className={styles['form-solo-div']}>
            <div
              className={`${styles['form-tag']} ${styles['form-tag-image']} ${
                user.type === 'SENIOR' ? 'font-22pt' : 'font-20pt'
              }`}
            >
              <span>사진 선택</span>
            </div>
            <div className={styles['image-selector']}>
              <button type='button' className={`${styles['class-img']} ${styles.selected}`}>
                <img src={classIMG1} alt='' />
              </button>
              <button type='button' className={styles['class-img']}>
                <img src={classIMG2} alt='' />
              </button>
              <button type='button' className={styles['class-img']}>
                <img src={classIMG3} alt='' />
              </button>
              <button type='button' onClick={handleFileInputClick} className={styles['img-upload-button']}>
                +
              </button>
              <input
                type='file'
                accept='image/*'
                onChange={handleFileChange}
                ref={imageInputRef}
                className={styles['hidden-input']}
              />
              {imageFile && <img src={URL.createObjectURL(imageFile)} alt='img-upload' />}
            </div>
          </div>
          <Button
            action={handleSubmit}
            buttonStyle={buttonStyle}
            tag={`${user.type === 'SENIOR' ? '수업 요청하기' : '수업 등록하기'}`}
          />
        </form>
        <div> </div>
      </div>
    </div>
  );
}

export default RequestClass;
