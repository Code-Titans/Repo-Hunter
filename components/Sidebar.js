import React, { useState, useContext } from 'react';
import { SidebarRepos } from '../fixtures';
import { UserContext } from './Layout';
import styles from '../styles/Sidebar.scss';

const Sidebar = () => {
  const { isLoggedIn } = useContext(UserContext);
  const [repos, setRepos] = useState(SidebarRepos);
  const showMoreRepos = () => {
    setRepos(SidebarRepos);
  };
  return !isLoggedIn ? null : (
    <div className={styles.Card}>
      <h2>My repos</h2>
      {repos.length === 0 ? (
        <p className={
          `${styles.NullRepoList} ${styles.SidebarRepoList}`
        }
        >
          {'You have no repos'}
        </p>
      ) : (
        <>
          <ul className={`${styles.NonNullRepoList} ${styles.SidebarRepoList}`}>
            {repos.map(repo => (
              <li key={repo.name}>
                <img src={repo.img} alt={repo.name} />
                <span>{repo.name}</span>
              </li>
            ))}
          </ul>
          <span
            role="button"
            tabIndex={0}
            onClick={showMoreRepos}
            className={styles.ShowMore}
          >
            {'Show more...'}
          </span>
        </>
      )}
    </div>
  );
};

export default Sidebar;
