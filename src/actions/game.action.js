export const addNewGame = (game) => {
  return {
    type: 'ADD_GAME',
    payload: game,
  }
}

export const setGameStatus = (game) => {
  return {
    type: 'SET_STATUS_GAME',
    payload: game,
  }
}