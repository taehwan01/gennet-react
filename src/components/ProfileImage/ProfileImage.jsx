import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import styles from './ProfileImage.module.scss';
import seniorIMG from '../../assets/images/senior.png';
import youthIMG from '../../assets/images/junior.png';

function ProfileImage() {
  const user = useSelector((state) => state.user);
  return (
    <NavLink className={styles['profile-link']} to={`/${user.memberType.toLowerCase()}/profile`}>
      <img src={`${user.memberType === 'SENIOR' ? seniorIMG : youthIMG}`} alt='Profile IMG' />
    </NavLink>
  );
}

export default ProfileImage;
