import React from 'react';
import { useSelector } from 'react-redux';
import GameList from '../components/home/gameList';

HomePage.propTypes = {

}

function HomePage(props) {
  const gameList = useSelector(state => state.game.list);

  return (
    <div className='home-page'>
      <h1>Test</h1>
      <GameList gameList={gameList}></GameList>
    </div>
  )
}

export default HomePage;