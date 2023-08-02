import PropTypes from 'prop-types';

import styles from './PageBanner.module.scss';

function PageBanner({ pageTitle, pageIntro }) {
  return (
    <div className={styles['page-banner']}>
      <h1 className={styles['page-title font-bold']}>{pageTitle}</h1>
      <h3 className={styles['page-intro font-light']}>{pageIntro}</h3>
    </div>
  );
}

PageBanner.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  pageIntro: PropTypes.string.isRequired,
};

export default PageBanner;
