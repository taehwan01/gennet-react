import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
// import { useParams } from 'react-router-dom';

import styles from './ClassChatroom.module.scss';

// dummy data
const user = '김태환';
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

function ClassChatroom() {
  const navigate = useNavigate();

  const sendButtonStyle = {
    backgroundColor: '#57b0bc',
    width: '108px',
    height: '50px',
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
  //   const { roomId } = useParams();
  //   const [message, setMessage] = useState('');
  //   const [chatMessages, setChatMessages] = useState([]);

  const handleSendMessage = () => {
    // 1. 서버로 채팅 내용 보내고
    // 2. 클라이언트에 서버 채팅 내역 다시 가져와서
    // 3. 재렌더링
    console.log('message sent.');
  };
  const handleExitChatroom = () => {
    // 수업 종료
    navigate('/senior');
  };

  const renderMessages = () => {
    let prevUser = null;
    return messages.map((msg) => {
      const sameUser = msg.user !== prevUser;
      prevUser = msg.user;
      return (
        <div className={user === msg.user ? styles.right : styles.left}>
          {sameUser && <span className='font-bold'>{msg.user}</span>}
          {msg.content}
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
            <input type='text' className={styles['message-input']} placeholder='내용을 입력해 주세요.' />
            <div className={styles['send-button']}>
              <Button action={handleSendMessage} buttonStyle={sendButtonStyle} tag='전송' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassChatroom;
