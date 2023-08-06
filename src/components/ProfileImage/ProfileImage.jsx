import { NavLink } from 'react-router-dom';

import styles from './ProfileImage.module.scss';
import testIMG from '../../assets/images/banana.png';

function ProfileImage() {
  return (
    <NavLink className={styles['profile-link']} to='/senior/profile'>
      <img src={testIMG} alt='Profile IMG' />
    </NavLink>
  );
}

export default ProfileImage;
