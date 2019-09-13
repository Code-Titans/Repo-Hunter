import React, { useContext } from 'react';
import styles from '../styles/Profile.scss';
import { UserContext } from './Layout';

const ProfileDetails = () => {
  const { avatar, name } = useContext(UserContext);
  return (
    <>
      <div className={styles.Profile}>
        <img
          src={avatar}
          alt="profile-pic"
          className={styles.ProfileImage}
        />
        <div className={styles.ProfileDetails}>
          <div className={styles.ProfileDetailsUsername}>
            <h3>Bryce Cee</h3>
            <h4>{`@${name}`}</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Aliquid assumenda at consequatur cum deleniti dignissimos,
            dolorem error hic id non provident quae quas quis repudiandae
            sit ut voluptate voluptatibus. Aspernatur!
          </p>
          <div>
            <ul>
              <li>
                <img src="../static/img/star.svg" alt="start" />
                <span>@andela</span>
              </li>
              <li>
                <img src="../static/img/star.svg" alt="start" />
                <span>bryancee.me</span>
              </li>
              <li>
                <img src="../static/img/star.svg" alt="start" />
                <span>Nairobi, Kenya</span>
              </li>
              <li>
                <img src="../static/img/star.svg" alt="start" />
                <span>cheruiyotbryan@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={styles.ProfileEdit}
          role="button"
          tabIndex={-1}
          onClick={() => console.log('edit profile')}
        >
          <img src="../static/img/search_icon.svg" alt="edit-icon" />
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
