import React from 'react';

const style = require('../styles/RepoList.scss');


const RepoCard = ({repo}) => {
  return (
      <div className={style.Card}>
        <img
            src={repo.imageUrl}
            alt="image"/>
        <div className={style.CardContent}>
          <div className={style.CardContentText}>
            <h2>{repo.username}</h2>
            <p className={style.CardContentTextDesc}>
              {repo.description}
            </p>
            <div className={style.CardContentInteractions}>
              <span>{repo.likes} Likes</span>
              <span>{repo.comments} Comments</span>
            </div>
          </div>
          <div className={style.CardStar}>
            <img className={style.CardStarIcon}
                 src="../static/img/star.svg"
                 alt="star"/>
            <span>{repo.starsGazers}</span>
          </div>
        </div>
      </div>
  )

};

export default RepoCard;
