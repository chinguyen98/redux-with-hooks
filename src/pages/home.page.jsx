import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import GameList from '../components/home/gameList';
import { addNewGame, setGameStatus } from '../actions/game.action';

HomePage.propTypes = {

}

function HomePage(props) {
  const gameList = useSelector(state => state.game.list);
  const activeId = useSelector(state => state.game.activeId);
  const dispatch = useDispatch();

  const handleAddGame = () => {
    const game = {
      id: uuidv4(),
      title: `Game ${uuidv4().split('-')[0]}`,
    }
    const action = addNewGame(game);
    dispatch(action);
  }

  const handleGameClick = (game) => {
    const action = setGameStatus(game);
    dispatch(action);
  }

  return (
    <div className='home-page'>
      <h1>Test</h1>
      <button onClick={handleAddGame}>Add random game!</button>
      <GameList gameList={gameList} activeId={activeId} onGameClick={handleGameClick} />
    </div>
  )
}

export default HomePage;