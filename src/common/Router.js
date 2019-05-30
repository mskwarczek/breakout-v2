import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from '../views/Menu';
import Game from '../views/Game';
import Highscore from '../views/Highscore';
import Options from '../views/Options';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Menu} />
            <Route exact path='/game' component={Game} />
            <Route exact path='/highscore' component={Highscore} />
            <Route exact path='/options' component={Options} />
        </Switch>
    );
};

export default Router;