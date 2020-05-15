import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import GameList from '../components/home/gameList';
import { addNewGame } from '../actions/game.action';

HomePage.propTypes = {

}

function HomePage(props) {
  const gameList = useSelector(state => state.game.list);
  const dispatch = useDispatch();

  const handleAddGame = () => {
    const game = {
      id: uuidv4(),
      title: `Game ${uuidv4().split('-')[0]}`,
    }
    const action = addNewGame(game);
    dispatch(action);
  }

  return (
    <div className='home-page'>
      <h1>Test</h1>
      <button onClick={handleAddGame}>Add random game!</button>
      <GameList gameList={gameList}></GameList>
    </div>
  )
}

export default HomePage;