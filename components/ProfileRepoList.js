import React from 'react';
import styles from '../styles/ProfileRepoList.scss';

const ProfileRepoList = () => {
  return (
    <div className={styles.ProfileRepoList}>
      <h3>My repos</h3>
      { [1,2,3].map(() =>
        (
          <div className={styles.ProfileRepoListCard}>
            <h4>Repo-Hunter</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquid ducimus est quod voluptatem voluptates? Accusamus,
              ad asperiores consequuntur cum doloribus eum eveniet id
              laboriosdae vel?
            </p>
          </div>
        ))}
    </div>
  )
};

export default ProfileRepoList;
