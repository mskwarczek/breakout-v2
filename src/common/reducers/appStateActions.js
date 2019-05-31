export const SET_PLAYER_NAME = 'SET_PLAYER_NAME';
export const SET_PLAYER_SCORE = 'SET_PLAYER_SCORE';

export const setPlayerName = (playerName) => {
    return {
        type: SET_PLAYER_NAME,
        payload: {
            playerName
        }
    };
};

export const setPlayerScore = (level, score) => {
    return {
        type: SET_PLAYER_SCORE,
        payload: {
            level,
            score
        }
    };
};