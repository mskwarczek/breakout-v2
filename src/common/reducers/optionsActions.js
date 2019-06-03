export const SET_GAME_MODE = 'SET_GAME_MODE';

export const setGameMode = (gameMode) => {
    return {
        type: SET_GAME_MODE,
        payload: {
            gameMode
        }
    };
};
