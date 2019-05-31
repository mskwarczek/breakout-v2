import deepFreeze from 'deep-freeze';

import { SET_PLAYER_NAME, SET_PLAYER_SCORE } from './appStateActions';

const initialState = {
    playerName: null,
    playerTopLevel: null,
    playerScore: null
};

const appStateReducer = (state = initialState, action) => {
    deepFreeze(state);
    switch (action.type) {
        case SET_PLAYER_NAME:
            return {...state, playerName: action.payload.playerName};
        case SET_PLAYER_SCORE:
            return {...state, playerTopLevel: action.payload.level, playerScore: action.payload.score};
        default: return state;
    };
};

export default appStateReducer;
