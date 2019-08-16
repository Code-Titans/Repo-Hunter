import React, { Component, Fragment } from 'react';

const styles = require('../styles/Sidebar.scss');

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [
        {
          img: 'https://res.cloudinary.com/dry-wolf/image/upload/v1564569484/repo-hunter/github-icon.svg',
          name: 'Repo Hunter',
        },
        {
          img: 'https://res.cloudinary.com/dry-wolf/image/upload/v1564569484/repo-hunter/github-icon.svg',
          name: 'React Apollo',
        },
        {
          img: 'https://res.cloudinary.com/dry-wolf/image/upload/v1564569484/repo-hunter/github-icon.svg',
          name: 'Apollo Client',
        },
        {
          img: 'https://res.cloudinary.com/dry-wolf/image/upload/v1564569484/repo-hunter/github-icon.svg',
          name: 'Drinks ChapChap',
        },
      ],
    };
  }

  showMoreRepos = () => {
    console.log('show more repos');
  };

  render() {
    const { repos } = this.state;
    // TODO:
    //  conditionally display the show
    //  more text which is also a button
    return (
      <Fragment>
        <div className={styles.Card}>
          <h2>My repos</h2>
          <ul>
            {
              repos.map((repo) => (
                <li key={repo.name}>
                  <img src={repo.img} alt={repo.name} />
                  <span>{repo.name}</span>
                </li>
              ))
            }
          </ul>
          <span
            role="button"
            tabIndex={0}
            onClick={this.showMoreRepos}
            className={styles.ShowMore}
          >
Show more...
          </span>
        </div>
      </Fragment>
    );
  }
}

export default Sidebar;
