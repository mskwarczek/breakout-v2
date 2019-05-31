export const SET_PLAYER_NAME = 'SET_PLAYER_NAME';

export const setPlayerName = (playerName) => {
    return {
        type: SET_PLAYER_NAME,
        payload: {
            playerName
        }
    };
};
