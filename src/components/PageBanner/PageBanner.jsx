import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './PageBanner.module.scss';

function PageBanner({ pageTitle, pageIntro }) {
  const user = useSelector((state) => state.user);

  return (
    <div className={styles['page-banner']}>
      <h1 className={`${styles['page-title']} font-bold ${user.type === 'SENIOR' ? 'font-55pt' : 'font-40pt'}`}>
        {pageTitle}
      </h1>
      <h3 className={`${styles['page-intro']} font-light ${user.type === 'SENIOR' ? 'font-25pt' : 'font-22pt'}`}>
        {pageIntro}
      </h3>
    </div>
  );
}

PageBanner.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageIntro: PropTypes.string.isRequired,
};

export default PageBanner;

// className={`${styles['main-message']} font-bold ${
//   user.type === 'SENIOR' ? 'font-30pt' : 'font-22pt'
// }`}
