import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import styles from '../styles/Profile.scss';
import { USER_DETAIL } from '../gql';

const ProfileDetailsText = ({ text }) => (
  !text ? null : (
    <li>
      <img src="../static/img/star.svg" alt="start" />
      <span>{text}</span>
    </li>
  ));

ProfileDetailsText.propTypes = {
  text: PropTypes.string.isRequired,
};

const ProfileDetails = () => {
  const { data: { userDetails: user }, error, loading } = useQuery(USER_DETAIL);

  if (error) {
    console.log(error);
  }

  if (loading) {
    return (
      <div className={styles.ProfileLoading}>
        Loading...
      </div>
    );
  }

  return !user ? null : (
    <>
      <div className={styles.Profile}>
        <img
          src={user.picture}
          alt="profile-pic"
          className={styles.ProfileImage}
        />
        <div className={styles.ProfileDetails}>
          <div className={styles.ProfileDetailsUsername}>
            <h3>{user.name}</h3>
            <h4>{`@${user.username}`}</h4>
          </div>
          <p>{user.bio}</p>
          <div>
            <ul>
              <ProfileDetailsText text={user.company} />
              <ProfileDetailsText text={user.website} />
              <ProfileDetailsText text={user.location} />
              <ProfileDetailsText text={user.email} />
            </ul>
          </div>
        </div>
        <div
          className={styles.ProfileEdit}
          role="button"
          tabIndex={-1}
          onClick={() => console.log('edit profile')}
        >
          <img src="../static/img/edit-icon.svg" alt="edit-icon" />
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
