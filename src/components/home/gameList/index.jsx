import React from 'react';
import PropTypes from 'prop-types';

GameList.propsType = {
  gameList: PropTypes.array,
}

GameList.defaultProps = {
  gameList: [],
}

function GameList(props) {
  const { gameList } = props;

  return (
    <ul>
      {
        gameList.length !== 0 && gameList.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))
      }
      {
        gameList.length === 0 && <h1>No game</h1>
      }
    </ul>
  )
}

export default GameList;