import React from 'react';
import { withRouter } from 'react-router-dom';

import Router from './common/Router';
import Header from './views/Header';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                {
                    this.props.location.pathname !== '/game'
                        ? <Header />
                        : null
                }
                <Router />
            </div>
        );
    };
};

export default withRouter(App);
