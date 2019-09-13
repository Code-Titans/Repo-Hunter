import React from 'react';
import styles from '../styles/ProfileRepoList.scss';
import style from '../styles/Profile.scss';

const ProfileRepoList = () => (
  <div className={style.Profile}>
    <div className={styles.ProfileRepoList}>
      <h3>My repos</h3>
      <div className={styles.ProfileRepoListSection}>
        { [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
          <div className={styles.ProfileRepoListSectionCard}>
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
    </div>
  </div>
);

export default ProfileRepoList;
