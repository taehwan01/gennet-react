// import styles from './RequestClassConfirm.module.scss';
import ConfirmMessage from '../../components/ConfirmMessage/ConfirmMessage';
import PageBanner from '../../components/PageBanner/PageBanner';

function RequestClassConfirm() {
  return (
    <>
      <PageBanner
        pageTitle='수업 요청하기'
        pageIntro='궁금한 것들에 대해 수업을 요청해보세요.'
      />
      <ConfirmMessage
        mainMessage='수업이 정상적으로 요청되었습니다'
        subMessage='답변을 기다리는 동안 다른 수업을 보러가시겠어요?'
      />
    </>
  );
}

export default RequestClassConfirm;
