const initialState = {
  list: [],
  activeId: null
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GAME': {
      return state;
    }
    case 'SET_STATUS_GAME': {
      return state;
    }
    default: {
      return state;
    }
  }
}

export default gameReducer;