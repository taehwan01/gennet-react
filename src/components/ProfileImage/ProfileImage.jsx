import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import styles from './ProfileImage.module.scss';
import testIMG from '../../assets/images/banana.png';

function ProfileImage() {
  const user = useSelector((state) => state.user);
  return (
    <NavLink
      className={styles['profile-link']}
      to={`/${user.type.toLowerCase()}/profile`}
    >
      <img src={testIMG} alt='Profile IMG' />
    </NavLink>
  );
}

export default ProfileImage;
