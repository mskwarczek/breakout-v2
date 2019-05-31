import React from 'react';

import Router from './common/Router';
import Header from './views/Header';

const App = () => {
    return (
        <div className="app">
            <Header />
            <Router />
        </div>
    );
};

export default App;
