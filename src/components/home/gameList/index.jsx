import React from 'react';
import PropTypes from 'prop-types';
import './gameList.css'

GameList.propsType = {
  gameList: PropTypes.array,
  activeId: PropTypes.number,
  onGameClick: PropTypes.func,
}

GameList.defaultProps = {
  gameList: [],
  activeId: null,
  onGameClick: null,
}

function GameList(props) {
  const { gameList, activeId, onGameClick } = props;

  const handleClick = (game) => {
    if (onGameClick) {
      onGameClick(game);
    }
  }

  return (
    <ul className='game-list'>
      {
        gameList.length !== 0 && gameList.map((game) => (
          <li
            className={game.id === activeId ? 'active' : ''}
            key={game.id}
            onClick={() => { handleClick(game); }}
          >
            {game.title}
          </li>
        ))
      }
      {
        gameList.length === 0 && <h1>No game</h1>
      }
    </ul>
  )
}

export default GameList;