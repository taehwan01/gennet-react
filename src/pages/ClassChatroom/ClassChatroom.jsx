/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

import { useState } from 'react';
import styles from './ClassChatroom.module.scss';
import Button from '../../components/Button/Button';
import testIMG from '../../assets/images/banana.png';

// dummy data
// const user = '김태환';

function ClassChatroom() {
  const messages = [
    {
      messageId: 1,
      user: '김태환',
      content: '안녕하세요.',
    },
    {
      messageId: 2,
      user: '김태환',
      content: '계속 읽어봐도 영 어렵네요.',
    },
    {
      messageId: 3,
      user: '천다인',
      content: '어렵지 않아요! 해봅시다.',
    },
  ];
  const myClass = {
    tutor: '천다인',
    title: '버거킹 키오스크 수업',
  };

  const [modal, setModal] = useState(false);
  const [chat, setChat] = useState('');
  const [chatValidation, setChatValidation] = useState(false);

  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  console.log(user.name);
  const sendButtonStyle = {
    backgroundColor: '#57b0bc',
    // border: '2px solid #57b0bc',
    width: '108px',
    height: '64px',
    fontSize: '33px',
    borderRadius: '10px',
  };
  const exitButtonStyle = {
    backgroundColor: 'red',
    width: '200px',
    height: '50px',
    fontSize: '29px',
    borderRadius: '15px',
  };
  const yesButtonStyle = {
    backgroundColor: '#57b0bc',
    width: '200px',
    height: '60px',
    fontSize: '29px',
    borderRadius: '10px',
    marginRight: '2rem',
  };
  const noButtonStyle = {
    backgroundColor: '#A7A9AC',
    width: '200px',
    height: '60px',
    fontSize: '29px',
    borderRadius: '10px',
  };
  //   const { roomId } = useParams();
  //   const [message, setMessage] = useState('');
  //   const [chatMessages, setChatMessages] = useState([]);

  const handleChatChange = (event) => {
    const chatInput = event.target.value;
    setChat(chatInput);
    setChatValidation(chatInput.trim().length > 0);
  };
  const handleSendMessage = () => {
    // 1. 서버로 채팅 내용 보내고
    // 2. 클라이언트에 서버 채팅 내역 다시 가져와서
    // 3. 재렌더링
    if (chatValidation) console.log(`message: ${chat} sent.`);
    else console.log('need message!');
    setChat('');
  };
  const handleExitChatroom = () => {
    setModal(true);
  };
  const handleClickYesSenior = () => {
    navigate('/class-chat/:roomId/classEnd');
  };
  const handleClickYesYouth = () => {
    navigate(`/${user.type.toLowerCase()}`);
  };
  const handleClickNo = () => {
    setModal(false);
  };

  const handleProfileClick = () => {
    navigate(`/${user.type.toLowerCase()}/profile`);
  };

  const renderMessages = () => {
    let prevUser = null;
    return messages.map((msg) => {
      const sameUser = msg.user !== prevUser;
      prevUser = msg.user;
      return (
        <div className={`${styles['user-chat']} ${user.name === msg.user ? styles.right : styles.left}`}>
          {sameUser && (
            <div className={styles['same-user-chat']}>
              {msg.user !== user.name && (
                <div className={`${styles.profileButton}`} onClick={handleProfileClick}>
                  <img className={styles['profile-image']} src={testIMG} alt='Profile IMG' />
                </div>
              )}
              <span className={`${styles['message-user']} font-bold`}>{msg.user}</span>
              {msg.user === user.name && (
                <div className={`${styles.profileButton}`} onClick={handleProfileClick}>
                  <img className={styles['profile-image']} src={testIMG} alt='Profile IMG' />
                </div>
              )}
            </div>
          )}
          {msg.user === user.name ? (
            <div className={styles['message-content-right']}>{msg.content}</div>
          ) : (
            <div className={styles['message-content-left']}>{msg.content}</div>
          )}
        </div>
      );
    });
  };

  return (
    <div className={styles['class-chatroom']}>
      <div className={styles['chat-box']}>
        <div className={styles['chatroom-title']}>
          <span className='font-bold'>{myClass.title}</span>
          <Button action={handleExitChatroom} buttonStyle={exitButtonStyle} tag='수업 종료하기' />
        </div>
        <div className={styles['connection-message']}>
          <span className='font-bold'>청년 {myClass.tutor}님이 연결되었습니다.</span>
        </div>
        <div className={styles['chat-contents']}>{renderMessages()}</div>
        <div className={styles['input-box']}>
          <div className={styles['input-container']}>
            <input
              type='text'
              value={chat}
              onChange={handleChatChange}
              className={styles['message-input']}
              placeholder='내용을 입력해 주세요.'
            />
            <div className={styles['send-button']}>
              <Button action={handleSendMessage} buttonStyle={sendButtonStyle} tag='전송' />
            </div>
          </div>
        </div>
      </div>

      {modal && (
        <div className={styles['confirm-container']}>
          <div className={styles['confirm-component']}>
            <div className={styles['message-box']}>
              <div className={`${styles['main-message']} font-bold`}>
                <span>정말 수업을 종료하실건가요?</span>
              </div>
              <div className={styles['sub-message']}>
                <span>수업을 계속하고 싶으면 아니오를 눌러주세요.</span>
              </div>
              <div className={styles['button-container']}>
                <Button
                  action={user.type === 'SENIOR' ? handleClickYesSenior : handleClickYesYouth}
                  buttonStyle={yesButtonStyle}
                  tag='네, 종료할게요'
                />
                <Button action={handleClickNo} buttonStyle={noButtonStyle} tag='아니오' />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClassChatroom;
