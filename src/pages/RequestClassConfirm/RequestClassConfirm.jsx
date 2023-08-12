import { useSelector } from 'react-redux';
import styles from './RequestClassConfirm.module.scss';
import ConfirmMessage from '../../components/ConfirmMessage/ConfirmMessage';
import PageBanner from '../../components/PageBanner/PageBanner';

function RequestClassConfirm() {
  const user = useSelector((state) => state.user);

  return (
    <div className={styles['request-class-confirm']}>
      <PageBanner
        pageTitle={`${user.type === 'SENIOR' ? '수업 요청하기' : '수업 등록하기'}`}
        pageIntro={`${
          user.type === 'SENIOR'
            ? '궁금한 것들에 대해 수업을 요청해보세요.'
            : '시니어에게 알려주고 싶은 수업을 등록하세요.'
        }`}
      />
      <ConfirmMessage
        mainMessage={`${
          user.type === 'SENIOR' ? '수업이 정상적으로 요청되었습니다.' : '수업이 정상적으로 등록되었습니다.'
        }`}
        subMessage={`${
          user.type === 'SENIOR'
            ? '답변을 기다리는 동안 다른 수업을 보러가시겠어요?'
            : '연결을 기다리는 동안 다른 수업을 보러가시겠어요?'
        }`}
      />
    </div>
  );
}

export default RequestClassConfirm;
