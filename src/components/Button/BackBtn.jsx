import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './BackBtn.scss';

function BackBtn() {
  return (
    <button type='button' className='back-bt'>
      <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#ffffff' }} />
    </button>
  );
}

export default BackBtn;
