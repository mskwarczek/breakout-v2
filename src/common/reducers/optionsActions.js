export const SET_GAME_MODE = 'SET_GAME_MODE';
export const SET_GAME_SIZE = 'SET_GAME_SIZE';

export const setGameMode = (gameMode) => {
    return {
        type: SET_GAME_MODE,
        payload: {
            gameMode
        }
    };
};

export const setGameSize = (gameSize) => {
    return {
        type: SET_GAME_SIZE,
        payload: {
            gameSize
        }
    };
};
