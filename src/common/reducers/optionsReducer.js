import deepFreeze from 'deep-freeze';

import { SET_GAME_MODE } from './optionsActions';

const initialState = {
    gameMode: 'normal'
};

const optionsReducer = (state = initialState, action) => {
    deepFreeze(state);
    switch (action.type) {
        case SET_GAME_MODE:
            return {...state, gameMode: action.payload.gameMode};
        default: return state;
    };
};

export default optionsReducer;
