import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import styles from './RequestClass.module.scss';

import PageBanner from '../../components/PageBanner/PageBanner';
import Button from '../../components/Button/Button';
import classIMG1 from '../../assets/images/class-image-1.png';
import classIMG2 from '../../assets/images/class-image-2.png';
import classIMG3 from '../../assets/images/class-image-3.png';

const classImages = [classIMG1, classIMG2, classIMG3];

function RequestClass() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const imageInputRef = useRef();

  const [selectedInterest, setSelectedInterest] = useState('식사주문');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageFile, setImageFile] = useState(null);
  const [recentUpload, setRecentUpload] = useState(false);

  const buttonStyle = {
    backgroundColor: '#57b0bc',
    width: '300px',
    height: '80px',
    fontSize: '40px',
    borderRadius: '15px',
    margin: '0 0 40px 0',
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

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setRecentUpload(false);
  };

  const handleFileChange = (event) => {
    const image = event.target.files[0];
    if (image && image.type.includes('image')) {
      setImageFile(image);
      setRecentUpload(true);
    } else {
      // eslint-disable-next-line no-alert
      alert('Please select valid image file.');
    }
  };

  const handleFileInputClick = () => {
    setSelectedImageIndex(null);
    imageInputRef.current.click();
  };

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = () => {
    navigate(`/${user.type.toLowerCase()}/request-class/confirmed`);
  };

  const [title, setTitle] = useState('');
  // const [inputCountTitle, setInputCountTitle] = useState(0);
  const [titleValidation, setTitleValidation] = useState(false);

  const handleTitleChange = (e) => {
    const titleInput = e.target.value;
    setTitle(titleInput);
    // setInputCountTitle(titleInput.length);
    const space = titleInput.trim().split(' ');
    setTitleValidation(space.length >= 2);
  };

  const [content, setContent] = useState('');
  // const [inputCount, setInputCount] = useState(0);
  const [contentValidation, setContentValidation] = useState(false);

  const handleContentChange = (e) => {
    const contentInput = e.target.value;
    setContent(contentInput);
    // setInputCount(contentInput.length);
    const space = contentInput.trim().split(' ');
    setContentValidation(space.length >= 2);
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
              value={title}
              onChange={handleTitleChange}
              maxLength='255'
              placeholder='제목을 입력하세요.'
            />
            {title && !titleValidation ? (
              <span className={styles['error-message-title']}>*제목은 최소 2단어 이상으로 입력해주세요.</span>
            ) : (
              ''
            )}
            {/* <p className={styles.lengthCountTitle}>
              <span>{inputCountTitle}</span>
              <span>/255 자</span>
            </p> */}
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
              value={content}
              onChange={handleContentChange}
              maxLength='10000'
              placeholder={`${
                user.type === 'SENIOR' ? '어떤 내용의 수업을 듣고 싶나요?' : '어떤 내용의 수업을 등록하고 싶나요?'
              }`}
            />
            {content && !contentValidation ? (
              <span className={styles['error-message-content']}>*내용은 최소 2단어 이상으로 입력해주세요.</span>
            ) : (
              ''
            )}
            {/* <p className={styles.lengthCount}>
              <span>{inputCount}</span>
              <span>/10000 자</span>
            </p> */}
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
              {classImages.map((classImage, index) => (
                <button
                  type='button'
                  onClick={() => handleImageClick(index)}
                  className={`${styles['class-img']} ${styles[`class-img-${index + 1}`]} ${
                    selectedImageIndex === index && styles.selected
                  }`}
                >
                  {/* <img src={classImage} alt='class-img' /> */}
                </button>
              ))}
              {!imageFile && (
                <button type='button' onClick={handleFileInputClick} className={styles['img-upload-button']}>
                  +
                </button>
              )}
              <input
                type='file'
                accept='image/*'
                onChange={handleFileChange}
                ref={imageInputRef}
                className={styles['hidden-input']}
              />
              {imageFile && (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                <img
                  src={URL.createObjectURL(imageFile)}
                  onClick={handleFileInputClick}
                  className={`${styles['image-uploaded']} ${recentUpload && styles['recent-upload']}`}
                  alt='img-upload'
                />
              )}
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
