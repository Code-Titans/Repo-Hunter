import React, { useState } from 'react';
import { SidebarRepos } from '../fixtures';

import styles from '../styles/Sidebar.scss';
// TODO: Research on how to test functional components with hooks
const Sidebar = () => {
  const [repos, setRepos] = useState(SidebarRepos);
  const showMoreRepos = () => {
    setRepos(SidebarRepos);
  };
  // TODO: Repo pagination for the backend
  return (
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
