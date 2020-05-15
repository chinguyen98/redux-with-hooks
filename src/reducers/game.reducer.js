const initialState = {
  list: [],
  activeId: null
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GAME': {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    }
    case 'SET_STATUS_GAME': {
      return {
        ...state,
        activeId: action.payload.id,
      };
    }
    default: {
      return state;
    }
  }
}

export default gameReducer;