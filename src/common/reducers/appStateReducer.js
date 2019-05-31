import deepFreeze from 'deep-freeze';

import { SET_PLAYER_NAME } from './appStateActions';

const initialState = {
    playerName: null
};

const appStateReducer = (state = initialState, action) => {
    deepFreeze(state);
    switch (action.type) {
        case SET_PLAYER_NAME:
            return {...state, playerName: action.payload.playerName};
        default: return state;
    };
};

export default appStateReducer;
