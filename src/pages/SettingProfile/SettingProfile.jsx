import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import BackBtn from '../../components/Button/BackBtn';
import Button from '../../components/Button/Button';
import youthIMG from '../../assets/images/junior.png';
import seniorIMG from '../../assets/images/senior.png';
import { logoutUser, resetToken } from '../../store';

import styles from './SettingProfile.module.scss';
// const userIntro = `잘 부탁드립니다. 요즘 MZ들은 참 부럽네요. ^^
// 저도 시대에 뒤떨어지지 않으려면 열심히 배워야겠읍니다.
// 다들 화이팅! 오늘 하루도 행복만이 가득하길 ~^^
// 꽃보다 아름다운... 다인씨가 보고싶은 날입니다. *^^*
// fdf,dldfld,lfd,lf,dmfl;mfl; mflfdf l ms
// fkdmf;m ;dmfkfsmd kfmkmfk dsmf dmf ;kdmfdmf
//  kdmfkdsmf dmf km kdsmfdkmfdk mfdmfdkmf dkmf
//  mf kdsfmd;skfmdks mfmfds kfmdskmfkfmkfmdmfkf`;

function SettingProfile() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profileEdit = () => {
    // 수정하기
    navigate(`/${user.memberType.toLowerCase()}/profile-edit`);
  };

  const handleLogout = async () => {
    try {
      await axios.delete('http://ec2-13-209-8-248.ap-northeast-2.compute.amazonaws.com:8080//auth/logout', {
        headers: {
          Refresh: user.refreshToken,
        },
      });
      dispatch(logoutUser());
      navigate('/login');
    } catch (error) {
      console.log('Logout error: ', error);
    }
  };

  const fetchData = async () => {
    try {
      await axios.get(`http://ec2-13-209-8-248.ap-northeast-2.compute.amazonaws.com:8080//members/${user.memberId}`, {
        headers: {
          Authorization: user.accessToken,
        },
      });
    } catch (error) {
      if (error.response.status === 401) {
        const response = await axios.post(
          'http://ec2-13-209-8-248.ap-northeast-2.compute.amazonaws.com:8080//auth/reissue',
          {
            headers: {
              Refresh: user.refreshToken,
            },
          },
        );
        const accessToken = response.headers.authorization;
        dispatch(resetToken({ accessToken }));
      }
      console.log('Profile data error: ', error);
    }
  };

  const editButton = {
    backgroundColor: '#57b0bc',
    width: '300px',
    height: '70px',
    borderRadius: '15px',
    marginTop: '30px',
    marginRight: '38px',
    fontSize: `${user.memberType === 'SENIOR' ? '25pt' : '22pt'}`,
  };

  const logoutButton = {
    backgroundColor: '#a7a9ac',
    width: '300px',
    height: '70px',
    borderRadius: '15px',
    marginTop: '30px',
    marginLeft: '38px',
    fontSize: `${user.memberType === 'SENIOR' ? '25pt' : '22pt'}`,
  };

  const review = 4;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <BackBtn />
      </div>
      <div className={styles.section2}>
        <div>
          <img
            className={styles.profile}
            src={`${user.memberType === 'SENIOR' ? seniorIMG : youthIMG}`}
            alt='Profile IMG'
          />
        </div>
        <div className={styles.info}>
          <p className={styles.profileTxt}>
            <span className={` ${styles.typeTxt} ${user.memberType === 'SENIOR' ? 'senior-color' : 'youth-color'}`}>
              {user.memberType === 'SENIOR' ? '시니어' : '청년'}
            </span>
            <span className={`${styles.nameTxt} font-bold`}> {user.name} </span>
            <span className={`${styles.nimTxt} font-bold`}>님</span>
          </p>

          <div className={`${styles.reviewDiv}`}>
            <div className={`${styles.tutorEvaluate} font-bold`}>
              {user.memberType === 'SENIOR' ? (
                ''
              ) : (
                <>
                  <span className={styles.tutorReview}>{`${'★'.repeat(review)}${'☆'.repeat(5 - review)}`}</span>
                  <span className={styles.tutorScore}>4.0점</span>
                </>
              )}
            </div>
          </div>

          <p className={`${styles.dateTxt} ${user.memberType === 'SENIOR' ? 'font-22pt' : 'font-18pt'}`}>
            {user.dateOfBirth}
          </p>
        </div>
        <div className={styles.introContainer}>
          <div className={styles.introBox}>
            <div className={styles.introContent}>
              <p className={styles.introTxt}>{user.introduction}</p>
            </div>
          </div>
        </div>
        <div className={styles.section3}>
          <Button action={profileEdit} buttonStyle={editButton} tag='프로필 수정하기' />
          <Button action={handleLogout} buttonStyle={logoutButton} tag='로그아웃' />
        </div>
      </div>
      <div> </div>
    </div>
  );
}

export default SettingProfile;
