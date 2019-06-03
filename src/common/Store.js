import { createStore } from 'redux';

import reducers from './reducers/index';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const Store = createStore(
    reducers,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

Store.subscribe(() => {
    const optionsState = Store.getState().optionsReducer;
    saveState({
        optionsReducer: optionsState
    });
});

export default Store;
