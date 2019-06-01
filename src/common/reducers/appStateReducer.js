import deepFreeze from 'deep-freeze';

import { SET_PLAYER_NAME, SET_PLAYER_SCORE, SET_GAME_MODE } from './appStateActions';

const initialState = {
    playerName: null,
    playerTopLevel: null,
    playerScore: null,
    gameMode: 'normal'
};

const appStateReducer = (state = initialState, action) => {
    deepFreeze(state);
    switch (action.type) {
        case SET_PLAYER_NAME:
            return {...state, playerName: action.payload.playerName};
        case SET_PLAYER_SCORE:
            return {...state, playerTopLevel: action.payload.level, playerScore: action.payload.score};
        case SET_GAME_MODE:
            return {...state, gameMode: action.payload.gameMode};
        default: return state;
    };
};

export default appStateReducer;
