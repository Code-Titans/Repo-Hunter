import React from 'react';
import PropTypes from 'prop-types';

const style = require('../styles/RepoList.scss');


const RepoCard = ({ repo }) => {
  const {
    imageUrl, username, description, likes, comments, starsGazers,
  } = repo;
  return (
    <div className={style.Card}>
      <img
        src={imageUrl}
        alt="repo"
      />
      <div className={style.CardContent}>
        <div className={style.CardContentText}>
          <h2>{username}</h2>
          <p className={style.CardContentTextDesc}>
            {description}
          </p>
          <div className={style.CardContentInteractions}>
            <span>
              {`${likes} Likes`}
            </span>
            <span>
              {`${comments} Comments`}
            </span>
          </div>
        </div>
        <div className={style.CardStar}>
          <img
            className={style.CardStarIcon}
            src="https://res.cloudinary.com/dry-wolf/image/upload/v1564569486/repo-hunter/star.svg"
            alt="star"
          />
          <span>{starsGazers}</span>
        </div>
      </div>
    </div>
  );
};

RepoCard.propTypes = {
  repo: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    starsGazers: PropTypes.number.isRequired,
  }).isRequired,
};

export default RepoCard;
