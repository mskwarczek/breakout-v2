import deepFreeze from 'deep-freeze';

import { SET_GAME_MODE, SET_GAME_SIZE } from './optionsActions';

const initialState = {
    gameMode: 'normal',
    gameSize: 'full'
};

const optionsReducer = (state = initialState, action) => {
    deepFreeze(state);
    switch (action.type) {
        case SET_GAME_MODE:
            return {...state, gameMode: action.payload.gameMode};
        case SET_GAME_SIZE:
            return {...state, gameSize: action.payload.gameSize};
        default: return state;
    };
};

export default optionsReducer;
